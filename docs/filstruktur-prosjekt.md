# Filstruktur prosjekt

For å holde en oversiktlig struktur i prosjektet organiseres tilhørende filer på denne måten:

```
├── coverage                                # raporter fra testdekning (ignoreres av git)
├── dist                                    # byggfiler (ignoreres av git)
├── docs                                    # dokumentasjonsfiler
├── node_modules                            # node-moduler (ignoreres av git)
├── src
│   ├── assets                              # statiske filer
│   ├── components                          # komponenter
│   ├── pages                               # sider i prosjektet
│   ├── utils                               # felles utils-filer
│   ├── main.tsx                            # hovedfil for prosjektet
│   ├── routes.tsx                          # routing for prosjektet
├── config-filer                            # konfigurasjonsfiler for prosjektet
```
