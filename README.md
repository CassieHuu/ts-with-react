###
npx create-react-app ts-with-react --typescript

### Q1: 为什么App1.tsx 中使用HOC的方式封装loader会导致请求会一直被触发，但是App2.tsx 只会在挂载的时候触发？

### Hook 的规则
    只在最顶层使用 Hook
    只在 React 函数中调用 Hook

### 其他 Hook
    useReducer
    useCallback
    useMemo

