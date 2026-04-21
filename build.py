import glob
import os

# -------- SELECT CSS SOURCE --------

source_files = glob.glob("*JVC*Stylus_*.css")
if not source_files:
    raise RuntimeError("No source CSS file found")

CSS_FILE = max(source_files, key=os.path.getmtime)
print(f"Using source: {CSS_FILE}")

# -------- READ SOURCE + EXTRACT METADATA --------

version = None
description = None
author = None

with open(CSS_FILE, encoding="utf-8") as f:
    for line in f:
        stripped = line.strip()
        if stripped.startswith("@version"):
            version = stripped.split(None, 1)[1]
        elif stripped.startswith("@description"):
            description = stripped.split(None, 1)[1]
        elif stripped.startswith("@author"):
            author = stripped.split(None, 1)[1]
        elif "==/UserStyle==" in stripped:
            break

if not version:
    raise RuntimeError("@version not found")
if not author:
    raise RuntimeError("@author not found")
if not description:
    raise RuntimeError("@description not found")

# -------- TRANSFORM CSS -> JS CSS --------

result = []
in_header = True
in_del_block = False

with open(CSS_FILE, encoding="utf-8") as f:
    for line in f:
        stripped = line.strip()

        # Skip entete UserStyle (jusqu'a ==/UserStyle==  inclus)
        if in_header:
            if "==/UserStyle==" in stripped:
                in_header = False
            continue

        # JSCSS-DEL-BLOCK-START -> JSCSS-DEL-BLOCK-END : supprime tout le bloc
        if "JSCSS-DEL-BLOCK-START" in stripped:
            in_del_block = True
            continue
        if "JSCSS-DEL-BLOCK-END" in stripped:
            in_del_block = False
            continue
        if in_del_block:
            continue

        # JSCSS-DEL-LINE : supprime cette ligne
        if "JSCSS-DEL-LINE" in stripped:
            continue

        result.append(line)

css_content = "".join(result)

# -------- BUILD JS --------

js_header = f"""// ==UserScript==
// @name         UI_2023_JVC_JS
// @namespace    UI_2023_JVC_JS
// @version      {version}
// @description  {description} (JS).
// @author       {author}
// @match        *://www.jeuxvideo.com/*
// @grant        none
// @icon         https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/128px/1f7e7.png
// @license      CC0-1.0
// @run-at       document-start
// ==/UserScript==

/* SKIN CSS : https://userstyles.world/style/17542/ */
"""

js_content = js_header + """
const style = document.createElement("style");
style.textContent = `
""" + css_content + """`;
if (document.head) document.head.append(style);
else setTimeout(() => document.head.append(style), 300);
"""

out_file = "No_Round_JVC_CSS_Stylus_R3.js"
with open(out_file, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"JS généré : {out_file}")
