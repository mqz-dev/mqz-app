// // src/components/Preview/index.jsx
// import { lazy, Suspense, useState } from "react";
// import { useTheme } from "../../context/ThemeContext";
// import { useFormData } from "../../context/FormContext";
// import { themes, themeModules, getModulePath } from "../../utils/getThemes";
// import PreviewHeader from "./PreviewHeader";
// import Loader from "../Loader";
// import styles from "./Preview.module.css";
// import PostDownloadModal from "../Modals/PostDownloadModal";

// // IMPORTANT: lazy() must be called once per component, at module scope —
// // not inside render (even inside useMemo). Calling it during render makes
// // React treat it as a brand-new component type on every call ("Cannot
// // create components during render"), discarding mount state. Since we
// // already know every theme path up front from the glob keys, build the
// // whole map of lazy components once, here, when this module first loads.
// const themeComponents = Object.fromEntries(
//   Object.entries(themeModules).map(([path, importFn]) => {
//     const id = path
//       .split("/")
//       .pop()
//       .replace(/\.jsx?$/, "");
//     return [id, lazy(importFn)];
//   }),
// );

// function slugify(value) {
//   return (
//     String(value || "my-page")
//       .toLowerCase()
//       .trim()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/(^-|-$)/g, "") || "my-page"
//   );
// }

// export default function Preview({ onClose }) {
//   const { selectedTheme, setSelectedTheme } = useTheme();
//   const { data } = useFormData();
//   const [showPostDownloadModal, setShowPostDownloadModal] = useState(false);
//   const [isDownloading, setIsDownloading] = useState(false);

//   // Just a lookup — no component creation happens here.
//   const ActiveTemplate = themeComponents[selectedTheme] ?? null;

//   // Downloading does NOT depend on ActiveTemplate being mounted — it's a
//   // separate call to the same module loader, then a plain function call.
//   // Data comes straight from context here, same as the theme component
//   // itself does; nothing is read out of the rendered iframe or DOM.
//   const handleDownload = async () => {
//     const path = getModulePath(selectedTheme);
//     if (!themeModules[path]) return;

//     setIsDownloading(true);
//     try {
//       const mod = await themeModules[path]();
//       const html = mod.toHTML(data);

//       const blob = new Blob([html], { type: "text/html" });
//       const url = URL.createObjectURL(blob);

//       const link = document.createElement("a");
//       link.href = url;
//       link.download = `${slugify(data.name)}.html`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(url);

//       setShowPostDownloadModal(true);
//     } finally {
//       setIsDownloading(false);
//     }
//   };

//   return (
//     <>
//       <main className={styles.previewPage}>
//         <PreviewHeader
//           onClose={onClose}
//           selectedTheme={selectedTheme}
//           setSelectedTheme={setSelectedTheme}
//           themes={themes}
//           handleDownload={handleDownload}
//           canDownload={Boolean(ActiveTemplate) && !isDownloading}
//         />
//         <section className={styles.previewContainer}>
//           {ActiveTemplate ? (
//             <Suspense fallback={<Loader />}>
//               {/* key forces a clean remount on theme switch instead of React
//                   trying to reconcile two unrelated component trees */}
//               <ActiveTemplate key={selectedTheme} />
//             </Suspense>
//           ) : (
//             <p className={styles.emptyState}>
//               Select a theme above to see your preview.
//             </p>
//           )}
//         </section>
//       </main>

//       {showPostDownloadModal && (
//         <PostDownloadModal onClose={() => setShowPostDownloadModal(false)} />
//       )}
//     </>
//   );
// }

export default function Preview() {
  return <div>Preview</div>;
}
