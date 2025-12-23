import CollageCard from "@/components/resourceHub/Cards"
import TiltBanner from "@/components/resourceHub/TiltBanner"
import Link from "next/link"
import { resourceHubData } from "@/data/resourceHubData"
import { notFound } from "next/navigation"

export default function ToolPage({ params }: { params: { domain: string; tool: string } }) {
	const domainData = resourceHubData.find((d) => d.slug === params.domain)
	const toolData = domainData?.tools.find((t) => t.slug === params.tool)

	if (!domainData || !toolData) {
		return notFound()
	}

	return (
		<div className='pt-32 md:pt-40 pb-10'>
			<div className='mx-auto max-w-6xl px-4 md:px-6 mb-12'>
				<TiltBanner
					text={toolData.name.toUpperCase()}
					rotate={-3}
					skewX={-4}
					bg='#0a0a0a'
					color='#ffffff'
					px={56}
					py={16}
					radius={2}
					letterStagger={0.04}
					letterPop={1.1}
				/>
			</div>
			<div className='min-h-[63.4vh] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-8 px-4'>
				<div className='w-full lg:w-auto flex justify-center'>
					<Link href={`/resourceHub/${params.domain}/${params.tool}/concepts`}>
						<CollageCard
							title='Concepts'
							description={`Explore core concepts and ideas in ${toolData.name}.`}
							handDirection='left'
						/>
					</Link>
				</div>
				<div className='w-full lg:w-auto flex justify-center lg:justify-start'>
					<Link href={`/resourceHub/${params.domain}/${params.tool}/courses`}>
						<CollageCard
							title='Courses'
							description={`Find structured learning materials for ${toolData.name}.`}
							handDirection='right'
							handSrc='/images/resource_hub/resource_hub_right_animation.svg'
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}
