import { useState, useCallback } from 'react';

/**
 * 实现文本复制功能hook
 * @param text {string}
 * @returns 
 */
const useCopyText = (text: string) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
      } else {
        throw new Error('当前环境不支持复制操作');
      }
    } catch (err) {
      console.error('复制失败：', err);
    }
  }, [text]);

  return { isCopied, copy };
};

export default useCopyText;
