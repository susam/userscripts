readme:
	rm -f contents.tmp body.tmp README.tmp
	ls -1 *.js | sort | while read -r f; do \
	  echo "Working on file: $$f"; \
	  name=$$(sed -n "s/.*@name *//p" "$$f"); \
	  desc=$$(sed -n "s/.*@description *//p" "$$f"); \
	  slug=$$(printf '%s' "$$f" | sed 's/\..*//'); \
	  frag=$$(printf '%s' "$$name" | tr 'A-Z ' 'a-z-'); \
	  echo "* [$$name](#$$frag)" >> contents.tmp; \
	  echo "## $$name" >> body.tmp; \
	  echo >> body.tmp; \
	  echo "$$desc" >> body.tmp; \
	  echo >> body.tmp; \
	  echo "[Install Script][$$slug-raw]" >> body.tmp; \
	  echo >> body.tmp; \
	  echo "[View Source]($$f)" >> body.tmp; \
	  echo >> body.tmp; \
	  echo "[![$$name][$$slug-img]][$$slug-img]" >> body.tmp; \
	  echo >> body.tmp; \
	  echo "[$$slug-raw]: https://github.com/susam/userscript/raw/main/$$f" >> body.tmp; \
	  echo "[$$slug-img]: https://susam.github.io/blob/img/userscripts/$$slug.png" >> body.tmp; \
	  echo >> body.tmp; \
	  echo >> body.tmp; \
	  echo Creating body.tmp; \
	done
	sed -n '1,/## Contents/p' README.md >> README.tmp
	echo >> README.tmp
	cat contents.tmp >> README.tmp
	echo >> README.tmp
	echo >> README.tmp
	cat body.tmp >> README.tmp
	sed -n '/## Licence/,$$p' README.md >> README.tmp
	mv README.tmp README.md
	rm -f *.tmp
