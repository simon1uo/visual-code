export const deepCopy = <T>(target: T): T => {
  if (target === null) {
    return target
  }
  if (target instanceof Date) {
    return new Date(target.getTime()) as any
  }
  if (target instanceof Array) {
    const cp = [] as any[]
    ;(target as any[]).forEach(v => {
      cp.push(v)
    })
    return cp.map((n: any) => deepCopy<any>(n)) as any
  }
  if (typeof target === 'object') {
    const cp = { ...(target as { [key: string]: any }) } as { [key: string]: any }
    Object.keys(cp).forEach(k => {
      cp[k] = deepCopy<any>(cp[k])
    })
    return cp as T
  }
  return target
}

export function $(selector: string): HTMLElement | null {
  return document.querySelector(selector)
}

export function swap(arr: any, i: number, j: number) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
