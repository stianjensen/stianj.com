all: update

.PHONY: run
run:
	bundle exec jekyll serve --watch

.PHONY: update
update:
	bundle install
