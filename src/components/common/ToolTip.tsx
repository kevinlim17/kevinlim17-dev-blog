import React from 'react'
import { styled } from '@mui/material/styles'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'

const CustomToolTip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#000',
    color: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: 14,
    fontFamily: 'NanumSquareNeo',
    padding: '7px 10px',
  },
}))

export default CustomToolTip
