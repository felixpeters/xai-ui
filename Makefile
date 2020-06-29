deploy:
	api/venv/bin/pip freeze > requirements.txt
	yarn build
	git push origin master
