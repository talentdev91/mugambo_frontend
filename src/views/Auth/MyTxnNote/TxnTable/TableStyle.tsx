import React from 'react'
import { withStyles, createStyles, Theme, makeStyles } from '@material-ui/core/styles'

import {
  Table,
  TableCell,
  TableHead,
  TablePagination,
  Box,
  Button,
  InputBase,
  Typography,
  NativeSelect,
  Tooltip,
  TooltipProps,
} from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: '12px',
    wordWrap: 'break-word',
    backgroundColor: theme.palette.primary.main,
    boxShadow: `${
      localStorage.appTheme === 'darkTheme'
        ? '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)'
        : '0 0.5rem 1.2rem rgb(189 197 209 / 6%)'
    }`,
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: '8px',
  },
  link: {
    color: theme.palette.info.main,
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    maxWidth: 171,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.info.dark,
    },
  },
  tableBtn: {
    fontSize: '0.65625rem',
    color: theme.palette.text.disabled,
    padding: '0.3rem 0.6rem',
    marginRight: '0.25rem',
    float: 'left',
    textTransform: 'none',
  },
  bodyText: {
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#e4e6e9'}`,
    borderColor: '#c6daff',
    padding: '.75rem',
    fontSize: '.875rem',
    fontWeight: 400,
    color: `${localStorage.appTheme === 'darkTheme' ? 'white' : '#6c757e'}`,
    // color: '#6c757e',
    lineHeight: 1.7,
    textAlign: 'center',
  },
}))

const Darktooltip = makeStyles(() => ({
  arrow: {
    color: '#12161c',
  },
  tooltip: {
    maxWidth: 250,
    backgroundColor: '#12161c',
    color: 'white',
    textAlign: 'center',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '11px',
  },
}))

export function StyledTooltip(props: TooltipProps) {
  const classes = Darktooltip()

  return <Tooltip arrow classes={classes} {...props} />
}

export const StyledTable = withStyles((theme) => ({
  root: {
    minWidth: 236,
    borderTop: `1px solid ${theme.palette.secondary.light}`,
  },
}))(Table)

export const StyledTableHead = withStyles((theme) => ({
  root: {
    borderColor: theme.palette.secondary.light,
    backgroundColor: theme.palette.text.secondary,
    borderBottom: '1px solid #e7eaf3',
  },
}))(TableHead)

export const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: '10px',
    backgroundColor: theme.palette.primary.dark,
  },
  head: {
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
  },
}))(TableCell)

export const StyledTablePagination = withStyles({
  root: {
    padding: '0px',
    border: 'none',
  },
  input: {
    display: 'none',
  },
  caption: {
    display: 'none',
  },
  toolbar: {
    minHeight: '30px',
    '&.MuiToolbar-gutters': {
      padding: '0',
    },
  },
})(TablePagination)

export const StyledRowsPerPageBox = withStyles({
  root: {
    color: '#77838f',
    fontSize: '14px',
    fontWeight: 400,
  },
})(Box)

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 12,
      margin: '0 8px',
      padding: '4px 18px 8px 6px !important',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase)

export const StyledPaginationBtn = withStyles({
  root: {
    margin: '0 4px',
    padding: '5px 10px',
    backgroundColor: 'rgba(232,65,66,.1)',
    maxHeight: '30px',
    borderColor: '#e7eaf3',
    color: '#e84142',
    fontSize: '12px',
    lineHeight: 1.5,
    height: '100vh',
    textTransform: 'none',
    minWidth: '45px',
    borderRadius: '6px',
    '&:hover': {
      color: 'white',
      backgroundColor: '#e84142',
    },
  },
})(Button)

export const StyledPageInfoBtn = withStyles({
  root: {
    textAlign: 'center',
    margin: '0 4px',
    padding: '5px 10px',
    backgroundColor: 'rgba(232,65,66,.1)',
    maxHeight: '30px',
    borderColor: '#e7eaf3',
    color: '#8c98a4',
    fontSize: '12px',
    lineHeight: 1.5,
    fontWeight: 500,
    height: '100vh',
    textTransform: 'none',
    minWidth: 'fit-content',
    borderRadius: '6px',
  },
})(Box)

export const StyledPageTitle = withStyles({
  root: {
    padding: '12px 0',
    color: '#4a4f55',
    fontWeight: 400,
    fontSize: '21px',
  },
})(Typography)

export const StyledNativeSelect = withStyles({
  icon: {
    right: '8px',
  },
})(NativeSelect)

export const StyledTableControlBox = withStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down(768)]: {
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    [theme.breakpoints.up(768)]: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  },
}))(Box)

export const StyledEmptyRowBox = withStyles({
  root: {
    margin: '10px',
    color: '#725002',
    backgroundColor: '#f8ebcd',
    borderRadius: '6px',
  },
})(Box)
