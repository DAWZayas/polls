# To install 

```bash
	npm install
```

# To deploy local

Execute in a terminal:

```bash
	npm run start:firebase
```

In other terminal execute:

```bash
	npm start
```

And goto [http://localhost:8080](http://localhost:8080)

# To create new token

```bash
	SECRET=<secret> USER=<user> npm run token
```

Example

```bash
    SECRET=sRhN4rw1LfRCN8BXS5zCNpo3odJAWhTvLXXT8edk USER=bart npm run token
```


And add the shown token to './src/utils/tokens.js'
