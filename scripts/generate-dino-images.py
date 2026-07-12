#!/usr/bin/env python3
"""
Generate kid-friendly dinosaur illustrations via DALL-E 3.

Usage:
  OPENAI_API_KEY=sk-...  python3 scripts/generate-dino-images.py

Requires: pip install openai
Output:   apps/dino-app/assets/images/dinosaurs/<id>.png  (1024x1024, one per dino)
Cost:     13 images × $0.04 = ~$0.52 at standard quality
"""
import os
import sys
import time
import urllib.request
from pathlib import Path

try:
    from openai import OpenAI
except ImportError:
    sys.exit("Run: pip install openai")

STYLE = (
    "colorful children's book illustration, cute and friendly face, "
    "full body visible from the side, pure white background, "
    "bold clean outlines, bright cheerful colors, "
    "safe and appealing for children ages 4-9, no text, no labels"
)

DINOS = [
    {
        "id": "t-rex",
        "prompt": (
            "A friendly Tyrannosaurus Rex dinosaur with a wide happy smile, "
            "standing upright showing its large powerful legs, long tail, "
            "and characteristically tiny arms. Warm orange-brown coloring. " + STYLE
        ),
    },
    {
        "id": "triceratops",
        "prompt": (
            "A friendly Triceratops dinosaur showing its three prominent horns "
            "(two large brow horns and one nose horn) and its large decorative "
            "neck frill with colorful patterns. Earthy green coloring. " + STYLE
        ),
    },
    {
        "id": "stegosaurus",
        "prompt": (
            "A friendly Stegosaurus dinosaur showing two rows of tall triangular "
            "bony plates running along its back and four sharp tail spikes. "
            "Olive green body with orange-tipped plates. " + STYLE
        ),
    },
    {
        "id": "velociraptor",
        "prompt": (
            "A friendly Velociraptor dinosaur covered in colorful feathers like a bird, "
            "showing its curved sickle-shaped claw on one foot. About the size of a turkey. "
            "Bright teal and yellow feathers. " + STYLE
        ),
    },
    {
        "id": "brachiosaurus",
        "prompt": (
            "A friendly Brachiosaurus dinosaur with an extremely long neck reaching up high, "
            "small head, large round body, and four pillar-like legs. "
            "The neck takes up most of the image. Soft blue-green coloring. " + STYLE
        ),
    },
    {
        "id": "pteranodon",
        "prompt": (
            "A friendly Pteranodon flying dinosaur with large wings spread wide, "
            "a distinctive long pointed head crest, and a toothless beak. "
            "Shown in flight. Purple and blue wing coloring. " + STYLE
        ),
    },
    {
        "id": "spinosaurus",
        "prompt": (
            "A friendly Spinosaurus dinosaur showing the dramatic tall sail-like spines "
            "running along its back. Long crocodile-like snout with visible teeth in a smile. "
            "Teal and dark blue coloring with a bright orange sail. " + STYLE
        ),
    },
    {
        "id": "ankylosaurus",
        "prompt": (
            "A friendly Ankylosaurus dinosaur with a heavily armored body covered in "
            "bony plates and spikes, and a large rounded club at the tip of its tail. "
            "Low to the ground, wide body. Brown and grey armor plating. " + STYLE
        ),
    },
    {
        "id": "parasaurolophus",
        "prompt": (
            "A friendly Parasaurolophus dinosaur showing its distinctive long hollow "
            "tube-like crest sweeping backward from its head like a horn. "
            "Duck-like flat beak. Warm reddish-orange coloring with green accents. " + STYLE
        ),
    },
    {
        "id": "pachycephalosaurus",
        "prompt": (
            "A friendly Pachycephalosaurus dinosaur showing its thick dome-shaped skull "
            "with bumpy spikes around the edge, standing upright on two legs. "
            "Brown and tan coloring with a distinctively rounded head. " + STYLE
        ),
    },
    {
        "id": "diplodocus",
        "prompt": (
            "A friendly Diplodocus dinosaur with an enormously long neck and an equally "
            "long whip-like tail, small head, and four thick legs. "
            "The body stretches across the full image. Sage green coloring. " + STYLE
        ),
    },
    {
        "id": "coelophysis",
        "prompt": (
            "A friendly Coelophysis dinosaur, a slender lightly-built early dinosaur "
            "about the size of a large dog, with a long narrow snout and long thin tail. "
            "Standing on two legs, agile pose. Reddish-brown with cream stripes. " + STYLE
        ),
    },
    {
        "id": "plateosaurus",
        "prompt": (
            "A friendly Plateosaurus dinosaur, a medium-sized early plant-eating dinosaur "
            "that could stand on two or four legs, with a small head and long neck. "
            "Shown in a relaxed standing pose. Mossy green coloring. " + STYLE
        ),
    },
]

def main():
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        sys.exit("Set OPENAI_API_KEY environment variable before running.")

    client = OpenAI(api_key=api_key)

    # Resolve output dir relative to this script's location (project root/scripts/)
    script_dir = Path(__file__).parent
    out_dir = script_dir.parent / "apps" / "dino-app" / "assets" / "images" / "dinosaurs"
    out_dir.mkdir(parents=True, exist_ok=True)

    total = len(DINOS)
    for i, dino in enumerate(DINOS, 1):
        out_path = out_dir / f"{dino['id']}.png"
        if out_path.exists():
            print(f"[{i}/{total}] {dino['id']}.png already exists, skipping.")
            continue

        print(f"[{i}/{total}] Generating {dino['id']}...")
        try:
            response = client.images.generate(
                model="dall-e-3",
                prompt=dino["prompt"],
                size="1024x1024",
                quality="standard",
                n=1,
            )
            url = response.data[0].url
            urllib.request.urlretrieve(url, out_path)
            print(f"          Saved → {out_path.name}  ({out_path.stat().st_size // 1024} KB)")
        except Exception as e:
            print(f"          ERROR: {e}")
            print("          Skipping — re-run the script to retry failed images.")

        # Rate limit: DALL-E 3 allows 5 img/min on tier 1
        if i < total:
            time.sleep(13)

    generated = [d for d in DINOS if (out_dir / f"{d['id']}.png").exists()]
    print(f"\nDone. {len(generated)}/{total} images in {out_dir}")
    if len(generated) < total:
        missing = [d["id"] for d in DINOS if not (out_dir / f"{d['id']}.png").exists()]
        print(f"Missing: {', '.join(missing)}")
        print("Re-run the script to generate missing images (existing ones are skipped).")


if __name__ == "__main__":
    main()
