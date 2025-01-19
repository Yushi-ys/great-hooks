import { useCallback, useState } from 'react'

/**
 * 强制组件重新渲染
 * 场景：假设有一个组件，它需要在某个定时任务完成后重新渲染，但定时任务的完成并不改变组件的状态或属性。此时就可以使用这个 hook 去做强制渲染
 * @returns 
 */
const useForceUpdate = () => {
    const [count, setCount] = useState(1)

    const forceUpdate = useCallback(() => {
        setCount((pre) => pre + 1)
    }, [])

    return { forceUpdate, forceUpdateFlag: count }
}

export default useForceUpdate
