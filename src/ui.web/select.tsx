import { CaretUpDown } from '@phosphor-icons/react'
import { Button, Label, ListBox, ListBoxItem, Popover, Select as AriaSelect, SelectValue } from 'react-aria-components'

interface SelectProps<T> {
  defaultValue: T
  label?: string
  options: T[]
  onChange: (value: T) => void
  map: (value: T) => React.ReactNode
}


export function Select<T extends string>(ps: SelectProps<T>) {
  return (
    <AriaSelect
      selectedKey={ps.defaultValue}
      onSelectionChange={v => ps.onChange(v as T)}
      aria-label='Language'
    >
      {ps.label && <Label>{ps.label}</Label>}
      <Button className="border rounded-md border-stone-200 p-2 px-2.5 flex items-center gap-2 outline-none">
        <SelectValue />
        <span aria-hidden="true">
          <CaretUpDown />
        </span>
      </Button>
      <Popover className="bg-white py-2.5 px-2 z-50 w-36 border border-stone-200 rounded-lg">
        <ListBox
          items={ps.options.map(o => ({ value: o, key: o }))}
          className="flex flex-col gap-3"
        >
          {item => (
            <ListBoxItem
              value={item}
              aria-label={item.value}
              className="outline-none rounded-lg py-1 px-2.5 transition-colors hover:bg-stone-100 cursor-default">
              {ps.map(item.value)}
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </AriaSelect>
  )
}
