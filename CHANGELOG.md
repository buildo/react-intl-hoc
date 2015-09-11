# v0.1.4

## Fixes

consider `keyExists` also in `@translateProps`

# v0.1.3

## Features

- `messageExists` param and `formatMessageIfItExists` method in `@intlMethods`

# v0.1.2

drop lodash dep

# v0.1.1

## Features

- `keyMap` function in `@intlMethods` and other helpers/decorators is executed with Component instance context

# v0.1.0

## Features

- new helpers: `@translateProps`, `@keyMapFM`

## Breaking

- `@intlMethods` is now curried, first param is an optional `keyMap` fn