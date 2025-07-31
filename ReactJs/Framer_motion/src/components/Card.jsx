/* eslint-disable no-unused-vars */

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
function Card() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            exit={{
              opacity: 0,
              scale: 0.95,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            initial={{
              opacity: 0,
              scale: 0.95,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            className="w-72 min-h-[26rem] h-[26rem] rounded-xl p-6 flex flex-col
    
    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
"
          >
            <h2 className="font-bold text-[10px]">Aceternity UI Components</h2>
            <p className="text-neutral-600 mt-2 text-[10px]">
              A collection of beautiful UI components, designed to be used in
              your React applications.
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1 flex items-center text-[10px] mt-4 font-medium
            
            shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
              >
                Acertinity
              </button>
            </div>

            <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full border-neutral-200 bg-white rounded-lg divide-y divide-neutral-200"
              >
                <div className="flex items-center justify-between p-4">
                  <span className="text-xs font-semibold text-neutral-700">
                    Card Title
                  </span>
                  <span className="text-xs text-neutral-500">10/10/2023</span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-neutral-600">
                    This is a sample card content. You can add more details
                    here.
                  </p>
                </div>
                <div className="flex items-center justify-between p-4">
                  <span className="text-xs font-semibold text-neutral-700">
                    Card Title
                  </span>
                  <span className="text-xs text-neutral-500">10/10/2023</span>
                </div>
                <div className="flex items-center justify-between p-4">
                  <span className="text-xs font-semibold text-neutral-700">
                    Card Title
                  </span>
                  <span className="text-xs text-neutral-500">10/10/2023</span>
                </div>
                <div className="flex items-center justify-between p-4">
                  <span className="text-xs font-semibold text-neutral-700">
                    Card Title
                  </span>
                  <span className="text-xs text-neutral-500">10/10/2023</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Card;
