// Custom Material Tailwind theme.

const theme = {
  button: {
    defaultProps: {
      className:
        'bg-blue-900 rounded-none text-blue-50 hover:bg-yellow-600 hover:text-gray-900 hover:shadow-none',
      ripple: false,
    },
  },
  iconButton: {
    defaultProps: {
      ripple: false,
    },
  },
  card: {
    defaultProps: {
      shadow: false,
      className: 'text-gray-900',
    },
    styles: {
      base: {
        initial: {
          borderRadius: 'rounded-none',
        },
      },
    },
  },
  cardHeader: {
    defaultProps: {
      shadow: false,
      className: 'text-gray-900',
    },
    styles: {
      base: {
        initial: {
          borderRadius: 'rounded-none',
        },
      },
    },
  },
  input: {
    defaultProps: {
      className: 'rounded-none',
    },
    styles: {
      variants: {
        outlined: {
          base: {
            label: {
              before: {
                borderRadius: 'before:rounded-none',
              },
              after: {
                borderRadius: 'before:rounded-none',
              },
            },
          },
        },
      },
    },
  },
  list: {
    defaultProps: {
      ripple: false,
    },
    styles: {
      base: {
        item: {
          initial: {
            borderRadius: 'rounded-none',
          },
        },
      },
    },
  },
  select: {
    defaultProps: {
      className: 'rounded-none',
    },
    styles: {
      base: {
        menu: {
          borderRadius: 'rounded-none',
        },
        option: {
          initial: {
            borderRadius: 'rounded-none',
          },
        },
      },
      variants: {
        outlined: {
          base: {
            label: {
              before: {
                borderRadius: 'before:rounded-none',
              },
              after: {
                borderRadius: 'before:rounded-none',
              },
            },
          },
        },
      },
    },
  },
}

export default theme
