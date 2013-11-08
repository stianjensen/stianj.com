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
