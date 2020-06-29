deploy:
	api/venv/bin/pip freeze > requirements.txt
	yarn build
	git add .
	git commit -m "update frontend build"
	git push origin master
