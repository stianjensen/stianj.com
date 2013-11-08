all: update

.PHONY: run
run:
	bundle exec jekyll serve --watch

.PHONY: update
update:
	bundle install

.PHONY: build
build:
	bundle exec jekyll build

.PHONY: deploy
deploy:
	ssh stianj.com "cd public_html && rm -rf *"
	cd _site; \
	scp -r * stianj.com:public_html
