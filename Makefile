.PHONY: config
config: sessions-secret
	@Done!

.PHONY: sessions-secret
sessions-secret:
	@openssl rand -base64 64 > ./docker/secrets/sessions-key.secret
