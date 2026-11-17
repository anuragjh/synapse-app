"""Wraps src/pages/*.html content in the shared layout, then builds Tailwind CSS.
Usage: python3 src/build.py   (from the site folder)"""
import pathlib, re, subprocess
root = pathlib.Path(__file__).resolve().parent.parent
index = (root / "index.html").read_text()
header = re.search(r"<!-- Header -->.*?</header>", index, re.S).group(0).replace('href="#', 'href="./#')
footer = re.search(r"<!-- Footer -->.*?</footer>", index, re.S).group(0).replace('href="#', 'href="./#')
head = re.search(r"<head>.*?</head>", index, re.S).group(0)
for page in sorted((root / "src/pages").glob("*.html")):
    body = page.read_text()
    title = re.search(r"<!-- title: (.*?) -->", body).group(1)
    desc = re.search(r"<!-- description: (.*?) -->", body).group(1)
    h = re.sub(r"<title>.*?</title>", f"<title>{title}</title>", head)
    h = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="{desc}">', h)
    script = re.search(r"<script>.*?</script>", index, re.S).group(0)
    html = f'<!doctype html>\n<html lang="en" class="scroll-smooth">\n{h}\n<body class="bg-white font-sans text-night-900 antialiased">\n{header}\n<main class="mx-auto max-w-3xl px-5 py-20">\n{body}\n</main>\n{footer}\n{script}\n</body>\n</html>\n'
    (root / page.name).write_text(html)
    print("built", page.name)
subprocess.run(["npx", "--yes", "tailwindcss@3.4.17", "-i", "src/input.css", "-o", "assets/site.css", "--minify"], cwd=root, check=True)
