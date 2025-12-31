<div
            className="flex flex-1 w-full overflow-hidden"
            style={{
              height: isMaximized ? "calc(100vh - 72px)" : "calc(90vh - 72px)",
            }}
          >
            <AnimatePresence>
              {isSideSectionOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 240, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="h-full bg-white flex flex-col shadow-lg border-r border-gray-200"
                >
                  <div className="p-3 border-b border-gray-200 bg-white flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-800">
                      Pages
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsSideSectionOpen(false)}
                      className="p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-100"
                      aria-label="Close sidebar"
                    >
                      <FiX size={16} />
                    </motion.button>
                  </div>
                  {/* {!isCollapsed && ( */}
                  {/* <TooltipPortal text={"Expand left panel"}>
                      <FiSidebar className="text-[#6A0DAD] w-6 h-6 text-xl bg-gray-300 rounded-lg p-1 cursor-pointer" onClick={() => { setIsCollapsed(!isCollapsed) }} />
                    </TooltipPortal> */}
                  {/* )} */}
                  {userRole === "admin" && (
                    <div className="p-3 border-b border-gray-200">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          // console.log("doc",docId);

                          addSubNote(parentDocument?.id || docId);
                          openDocument(docId);
                          fetchSubDocs(doc.id);
                        }}
                        className="w-full flex items-center justify-center gap-2 p-2 bg-gradient-to-l from-[#00afeb] to-[#0bc78e]  text-white rounded-lg shadow-md"
                        aria-label="Add sub-document"
                      >
                        <FaPlus size={14} />
                        <span className="text-sm font-semibold">Add Page</span>
                      </motion.button>
                    </div>
                  )}
                  <div className="flex-1 overflow-y-auto p-3 scrollbar-hide mt-0">
                    {renderDocumentTree}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div
              style={{
                width: isSideSectionOpen ? "calc(100% - 240px)" : "100%",
              }}
              className="flex-1 h-full bg-white"
            >
              {isDocLoading ? (
                <div className="flex flex-col space-y-4 p-6 w-full h-full animate-pulse">
                  {/* Title skeleton */}
                  <div className="h-8 w-1/3 bg-gray-300 rounded"></div>

                  {/* Paragraph skeletons */}
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                    <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
                  </div>

                  {/* Another block (like an image or table placeholder) */}
                  <div className="h-40 w-full bg-gray-200 rounded"></div>
                </div>
              ) : docError ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-red-500">{docError}</p>
                </div>
              ) : (
                <div
                  className="h-full w-full overflow-y-auto custom-scrollbar"
                  style={{ minHeight: "calc(100% - 20px)" }}
                >
                  <div className="w-full h-full bg-white min-h-[calc(100%-40px)]">
                    <MemoizedDocPage
                      allusers={allusers}
                      docId={currentDocId}
                      onClose={onClose}
                      notesArray={notesArray}
                      key={docPageKey}
                      restoredContent={restoredContent}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
