import React from "react"
import {Box} from "theme-ui"

export default function Block({ sx, ...props }) {
  return (
    <Box
      sx={{
        display: "inline-block",
        px: 4,
        py: 3,
        border: "3px solid black",
        borderRadius: 8,
        ...sx,
      }}
      {...props}
    />
  )
}
