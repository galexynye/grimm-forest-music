import React from "react"

import { SiteProvider } from './src/components/05_page/Layout/SiteContainer'

export const wrapRootElement = ({ element }) => (<SiteProvider>{element}</SiteProvider>)