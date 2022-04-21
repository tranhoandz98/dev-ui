
export default function SidenavHeader({ open }) {
    return (
        <div className="flex items-center justify-center mb-6 pb-6 pt-3 sticky top-100 z-10">
            <div className="flex-shrink-0 flex items-center">
                {!open &&
                    <img
                        className="block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                    />
                }
                {open &&
                    <img
                        className="block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                        alt="Workflow"
                    />
                }
            </div>
        </div>
    );
}
