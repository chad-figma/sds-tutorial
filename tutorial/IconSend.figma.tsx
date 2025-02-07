import React from 'react'
import { IconSend } from '../src/ui/icons/IconSend'
import figma from '@figma/code-connect'

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from your code props to Figma properties.
 * You should check this is correct, and update the `example` function
 * to return the code example you'd like to see in Figma
 */

figma.connect(
  IconSend,
  'https://www.figma.com/design/A71qEYl40nE9sMd23vdRw1/SDS-Code-Connect-Tutorial-(Chad)?node-id=4049%3A13603',
  {
    props: {
      size: figma.enum('Size', {
        '16': '16',
        '20': '20',
        '24': '24',
        '32': '32',
        '40': '40',
        '48': '48',
      }),
    },
    example: ({size}) => <IconSend size={size} />,
  },
)
