# 🌍 Wereldbol-video voor LinkedIn (3 sep 2026)

Maakt een vierkante MP4 (1080×1080, ~7,7 s) + GIF van de draaiende les-wereldbol
met een vraag erover heen. LinkedIn speelt GIF's niet af in de feed; gebruik de MP4.

Stappen (vanuit de repo-map):
1. Bundelen:   `NODE_PATH=$PWD/node_modules npx esbuild scripts/wereldbol-video/entry.jsx --bundle --outfile=scripts/wereldbol-video/out.js --loader:.json=json --jsx=automatic --define:process.env.NODE_ENV='"production"' --minify`
   + `cp public/logo.jpg scripts/wereldbol-video/logo.jpg`
2. Serveren:   `cd scripts/wereldbol-video && python -m http.server 5533 --bind 127.0.0.1`
3. Opnemen:    `node capture.cjs` (Playwright headless + swiftshader; 108 frames, 12 fps)
4. Renderen:   `ffmpeg -framerate 12 -i frames/f%04d.png -vf "setpts=0.7*PTS,scale=1080:1080:flags=lanczos,format=yuv420p" -r 24 -c:v libx264 -crf 20 -movflags +faststart LinkedIn-wereldbol.mp4`

Vraag/antwoord aanpassen: `entry.jsx` (#vraag / #antwoord). De bol rendert vast op
360 px hoog; de pagina schaalt 'm 2,1× op en capture.cjs centreert 'm na meting.
