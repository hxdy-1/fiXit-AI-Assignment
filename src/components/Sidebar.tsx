import React from "react";

const Sidebar = () => {
	return (
		<aside className="h-full bg-black w-[20%] fixed left-0 z-50">
			<nav className="h-full w-full flex flex-col border-r gap-10 text-sm text-white py-8 px-8">
				<div className="mb-2 cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						width="24"
						viewBox="0 0 512 512"
					>
						<path
							fill="#ffffff"
							d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3V304h96c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32H256V150.3c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"
						/>
					</svg>
				</div>
				<div className="flex flex-col gap-4">
					<p className="text-blue-400 font-semibold capitalize">
						call audit
					</p>
					<div className="flex gap-4 items-center py-2 rounded transition-colors duration-300 hover:text-neutral-400 cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="20"
							width="20"
							viewBox="0 0 512 512"
						>
							<path
								fill="#ffffff"
								d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z"
							/>
						</svg>
						<span>Summary</span>
					</div>
					<div className="flex gap-4 items-center py-2 rounded transition-colors duration-300 hover:text-neutral-400 cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="20"
							width="17.5"
							viewBox="0 0 448 512"
						>
							<path
								fill="#ffffff"
								d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
							/>
						</svg>
						<span>Data score</span>
					</div>
					<button className="flex gap-4 items-center border rounded-md py-4 px-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="20"
							width="15"
							viewBox="0 0 384 512"
						>
							<path
								fill="#ffffff"
								d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z"
							/>
						</svg>
						<span>Upload call records</span>
					</button>
				</div>
				<div className="flex flex-col gap-4">
					<p className="text-blue-400 font-semibold capitalize">
						AI Agent
					</p>
					<div className="flex gap-4 items-center py-2 rounded transition-colors duration-300 hover:text-neutral-400 cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="20"
							width="20"
							viewBox="0 0 512 512"
						>
							<path
								fill="#ffffff"
								d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z"
							/>
						</svg>
						<span>Summary</span>
					</div>
					<div className="flex gap-4 items-center py-2 rounded transition-colors duration-300 hover:text-neutral-400 cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="20"
							width="20"
							viewBox="0 0 512 512"
						>
							<path
								fill="#ffffff"
								d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"
							/>
						</svg>
						<span>Chat</span>
					</div>
					<button className="flex gap-4 items-center justify-between border rounded-md py-4 px-4">
						<span>Union_Budgets</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="14"
							width="14"
							viewBox="0 0 512 512"
						>
							<path
								fill="#ffffff"
								d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
							/>
						</svg>
					</button>
					<button className="flex gap-4 items-center border rounded-md py-4 px-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="20"
							width="15"
							viewBox="0 0 384 512"
						>
							<path
								fill="#ffffff"
								d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z"
							/>
						</svg>
						<span>Upload documents</span>
					</button>
				</div>
			</nav>
		</aside>
	);
};

export default Sidebar;
