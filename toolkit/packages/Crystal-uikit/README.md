# 🥞 Crystal UIkit

[![Version](https://img.shields.io/npm/v/@crystalswap-libs/uikit)](https://www.npmjs.com/package/@crystalswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@crystalswap-libs/uikit)](https://www.npmjs.com/package/@crystalswap-libs/uikit)

Crystal UIkit is a set of React components and hooks used to build pages on Crystal's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @crystalswap-libs/uikit`

## Setup

### Theme

Before using Crystal UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@crystalswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@crystalswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://crystalswap.github.io/crystal-uikit/)
