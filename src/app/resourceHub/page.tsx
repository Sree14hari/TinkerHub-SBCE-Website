import CollageCard from "@/components/resourceHub/Cards"
import TiltBanner from "@/components/resourceHub/TiltBanner"
import Link from "next/link"

export default async function ResourceHub() {
	return (
		<div className="pt-32 md:pt-40 pb-10">
			<div className='mx-auto max-w-6xl px-4 md:px-6 mb-12'>
				<TiltBanner
					text='RESOURCES PAGE'
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
						<Link href='/resourceHub/concepts'>
							<CollageCard
								title='Concepts'
								description='The concept explains the main idea or theme behind the learning topic — what it is about and why it matters.'
								handDirection='left'
								
							/>
						</Link>
					</div>
					<div className='w-full lg:w-auto flex justify-center lg:justify-start'>
						<Link href='/resourceHub/domain'>
							<CollageCard
								title='Courses'
								description='The content is the actual learning material — the information, lessons, videos, or activities that help learners understand the concept.'
								handDirection='right'
								handSrc='/images/resource_hub/resource_hub_right_animation.svg'
								
							/>
						</Link>
					</div>
				</div>
			</div>
	)
}
