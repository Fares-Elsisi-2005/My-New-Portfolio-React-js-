import  { useMemo, useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const projectsData = [
	{
		id: 'react-1',
		title: 'Kanban Task Manager',
		category: 'React Projects',
		description: 'A Trello-like task board with drag-and-drop and persistence.',
		image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80&auto=format&fit=crop',
		demoUrl: 'https://example.com/demo1',
		detailsUrl: '#',
	},
	{
		id: 'react-2',
		title: 'Realtime Chat',
		category: 'React Projects',
		description: 'Socket.io chat with rooms, typing indicators, and reactions.',
		image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80&auto=format&fit=crop',
		demoUrl: 'https://example.com/demo2',
		detailsUrl: '#',
	},
	{
		id: 'htmlcss-1',
		title: 'Landing Page',
		category: 'HTML & CSS Projects',
		description: 'Polished marketing landing page with animations.',
		image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format&fit=crop',
		demoUrl: 'https://example.com/demo3',
		detailsUrl: '#',
	},
	{
		id: 'htmlcss-2',
		title: 'Portfolio Theme',
		category: 'HTML & CSS Projects',
		description: 'Clean portfolio theme built with utility-first CSS.',
		image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop',
		demoUrl: 'https://example.com/demo4',
		detailsUrl: '#',
	},
]

function groupByCategory(items) {
	const map = new Map()
	for (const item of items) {
		if (!map.has(item.category)) map.set(item.category, [])
		map.get(item.category).push(item)
	}
	return Array.from(map.entries()).map(([category, list]) => ({ category, list }))
}

function Modal({ open, onClose, project }) {
	if (!open || !project) return null
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div className="absolute inset-0 modal-backdrop" onClick={onClose} />
			<div className="relative z-10 w-[90vw] max-w-xl rounded-2xl bg-white shadow-card">
				<button
					aria-label="Close"
					onClick={onClose}
					className="absolute right-3 top-3 rounded-full p-2 text-slate-500 hover:bg-slate-100"
				>
					×
				</button>
				<div className="p-6">
					<div className="flex items-start gap-4">
						<img src={project.image} alt="" className="h-20 w-20 rounded object-cover" />
						<div>
							<h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
							<p className="mt-1 text-slate-600">{project.description}</p>
						</div>
					</div>
					<div className="mt-6 flex flex-wrap gap-3">
						<a
							href={project.demoUrl}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
						>
							See Demo
						</a>
						<a
							href={project.detailsUrl}
							className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50"
						>
							View Details
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

function ProjectCard({ project, onClick }) {
	return (
		<button
			onClick={() => onClick(project)}
			className="group relative h-32 w-48 overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg"
		>
			<img
				src={project.image}
				alt={project.title}
				className="h-full w-full object-cover"
				draggable={false}
			/>
			<div className="pointer-events-none absolute inset-x-0 bottom-0 line-clamp-1 bg-gradient-to-t from-black/60 to-transparent p-2 text-left text-sm font-medium text-white">
				{project.title}
			</div>
		</button>
	)
}

export default function ProjectsBoard() {
	const grouped = useMemo(() => groupByCategory(projectsData), [])
	const [selected, setSelected] = useState(null)

	return (
		<section id="projects" className="relative bg-transparent">
			<div className="mx-auto max-w-6xl px-4 py-10">
				<div className="flex items-end justify-between">
					<h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Projects</h2>
					<p className="text-sm text-slate-600">Scroll to zoom • Drag to pan • Click a project</p>
				</div>
			</div>

							<div className="relative isolate h-[70vh] min-h-[480px] w-full overflow-hidden border-y border-slate-200/50 bg-white/30 backdrop-blur">
				<TransformWrapper
					minScale={0.25}
					maxScale={3}
					initialScale={0.6}
					initialPositionX={0}
					initialPositionY={0}
					centerOnInit
					doubleClick={{ disabled: true }}
					wheel={{ step: 0.15 }}
					pinch={{ step: 5 }}
					panning={{ velocityDisabled: true }}
					limitToBounds={false}
				>
					<TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
						<div className="whiteboard-grid relative h-[1600px] w-[2200px] bg-transparent">
							{grouped.map((group, rowIndex) => (
								<div
									key={group.category}
									className="absolute left-1/2 -translate-x-1/2"
									style={{ top: 140 + rowIndex * 380 }}
								>
									<div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-slate-700 shadow">
										<span className="h-2 w-2 rounded-full bg-slate-400" />
										<span className="text-sm font-medium">{group.category}</span>
									</div>

									<div className="flex items-center gap-8">
										{group.list.map((p) => (
											<ProjectCard key={p.id} project={p} onClick={setSelected} />
										))}
									</div>
								</div>
							))}

							<div className="pointer-events-none absolute inset-0">
								<div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-200/70" />
							</div>
						</div>
					</TransformComponent>
				</TransformWrapper>
			</div>

			<Modal open={!!selected} onClose={() => setSelected(null)} project={selected} />
		</section>
	)
} 