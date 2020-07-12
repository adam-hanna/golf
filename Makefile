.PHONY: config
config: sessions-secret
	@echo "Done!"

.PHONY: sessions-secret
sessions-secret:
	@openssl rand -base64 64 > ./docker/secrets/sessions-key.secret
