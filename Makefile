readme:
	rm -f contents.tmp body.tmp README.tmp
	ls -1 *.js | sort | while read -r f; do \
	  echo "Working on file: $$f"; \
	  name=$$(sed -n "s/.*@name *//p" "$$f"); \
	  desc=$$(sed -n "s/.*@description *//p" "$$f"); \
	  slug=$$(printf '%s' "$$name" | tr 'A-Z ' 'a-z-'); \
	  echo "* [$$name](#$$slug)" >> contents.tmp; \
	  echo "## $$name" >> body.tmp; \
	  echo >> body.tmp; \
	  echo "* Description: $$desc" >> body.tmp; \
	  echo "* Install: [$$f](https://github.com/susam/userscript/raw/main/$$f)" >> body.tmp; \
	  echo "* Source: [$$f]($$f)" >> body.tmp; \
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
