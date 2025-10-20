import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import CollageCard from "@/components/resourceHub/Cards"
import TiltBanner from "@/components/resourceHub/TiltBanner"
import Link from "next/link"

export default async function ResourceHub() {
	return (
		<div className='flex min-h-dvh flex-col '>
			<Header />

			<div>
				<div className='mx-auto max-w-6xl px-6 mt-[25px]'>
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
								description='Explore curated docs, templates, and tools across AI, web, and systems — all in one place.'
								handDirection='left'
								width={400}
								height={415}
							/>
						</Link>
					</div>
					<div className='w-full lg:w-auto flex justify-center lg:justify-start'>
						<Link href='/resourceHub/courses'>
							<CollageCard
								title='Courses'
								description='Explore curated docs, templates, and tools across AI, web, and systems — all in one place.'
								handDirection='right'
								handSrc='/images/resource_hub/resource_hub_right_animation.svg'
								width={400}
								height={415}
							/>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
