import CollageCard from "@/components/resourceHub/Cards"
import TiltBanner from "@/components/resourceHub/TiltBanner"
import Link from "next/link"
import { resourceHubData } from "@/data/resourceHubData"

export default async function ResourceHub() {
	return (
		<div className="pt-32 md:pt-40 pb-10">
			<div className='mx-auto max-w-6xl px-4 md:px-6 mb-12'>
				<TiltBanner
<<<<<<< HEAD
					text='RESOURCE HUB'
=======
					text='RESOURCES HUB'
>>>>>>> 789e8fbfa71902f0fb17b9f2cb3bdc62e3a05ca4
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
				{resourceHubData.map((domain, index) => (
					<div key={domain.slug} className='flex justify-center'>
						<Link href={`/resourceHub/${domain.slug}`}>
							<CollageCard
								title={domain.name}
								description={domain.description}
								handDirection={index % 2 === 0 ? "left" : "right"}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}
