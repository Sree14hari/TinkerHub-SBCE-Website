import CollageCard from "@/components/resourceHub/Cards"
import TiltBanner from "@/components/resourceHub/TiltBanner"
import Link from "next/link"
import { resourceHubData } from "@/data/resourceHubData"
import { notFound } from "next/navigation"

export default async function DomainPage({ params }: { params: Promise<{ domain: string }> }) {
	const { domain } = await params
	const domainData = resourceHubData.find((d) => d.slug === domain)

	if (!domainData) {
		return notFound()
	}

	return (
		<div className='pt-32 md:pt-40 pb-10'>
			<div className='mx-auto max-w-6xl px-4 md:px-6 mb-12'>
				<TiltBanner
					text={domainData.name.toUpperCase()}
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
			<div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 lg:gap-16 py-8 px-4 max-w-6xl mx-auto'>
				{domainData.tools.map((tool, index) => (
					<div key={tool.slug} className='flex justify-center'>
						<Link href={`/resourceHub/${domainData.slug}/${tool.slug}`}>
							<CollageCard
								title={tool.name}
								description={tool.description || ""}
								handDirection={index % 2 === 0 ? "left" : "right"}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}
