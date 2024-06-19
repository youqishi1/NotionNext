/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      body {
        background-image: url('https://b38c280f.telegraph-image-cm.pages.dev/file/fb4725dea6fe4a4c9b909.jpg'); /* 您的图片地址 */
        background-size: cover; /* 覆盖整个页面 */
        background-position: center center; /* 图片居中显示 */
        background-repeat: no-repeat; /* 不重复图片 */
        overflow-x: hidden;
      }
      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }
      // 其他样式保持不变...
      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.4);
        border-radius: 8px;
        cursor: pointer;
      }
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      #more {
        white-space: nowrap;
      }
      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }
      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }
      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }
      * {
        box-sizing: border-box;
      }
      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }
      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  );
}
export { Style }
