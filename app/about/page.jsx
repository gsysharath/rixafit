import { pageMetadata } from '../../lib/seo';
import { site } from '../../data/site';
import NewsletterForm from '../../components/forms/NewsletterForm';
import PageBanner from '../../components/PageBanner';
import Testimonials from '../../components/Testimonials';

export const metadata = pageMetadata({
	title: 'About Us - Premium Fitness Studio in Mahabubnagar',
	description: 'RIXA FIT is a premium fitness studio in Padmavathi Colony, Mahabubnagar - modern equipment, professional trainer guidance, personal training, group fitness, Zumba, fitness boxing and an app with your personalised workout and diet plans.',
	path: '/about',
	keywords: ['about RIXA FIT', 'fitness studio Mahabubnagar', 'premium gym Mahabubnagar', 'personal training Mahabubnagar'],
});

const purpose = [
	{
		title: 'Our Mission',
		text: 'Our mission is to make quality fitness accessible and enjoyable by providing modern training facilities, professional guidance and a supportive fitness environment that inspires people to become stronger and healthier.',
	},
	{
		title: 'Our Vision',
		text: 'To become one of the most trusted and preferred fitness destinations in Mahabubnagar, inspiring individuals to make fitness an essential part of their everyday lives.',
	},
];

const highlights = [
	'Modern Gym Equipment & Training Facilities',
	'Professional Trainer Guidance',
	'Personal Training Programs',
	'Weight Loss & Fat Loss Training',
	'Weight Gain & Muscle Development',
	'Strength & Conditioning',
	'Functional & Circuit Training',
	'Group Fitness & Cardio',
	'Zumba & Dance Fitness',
	'Fitness Boxing',
	'Fitness Assessment & Progress Tracking',
	'Practical Nutrition Guidance',
];

const appFeatures = [
	'Access your personalized workout plans anytime.',
	'View your diet plans conveniently through the app.',
	'Follow your fitness schedule at your own pace.',
	'Track your progress and stay consistent.',
	'Manage your fitness journey easily, without any hassle.',
];

const facilities = [
	{ label: 'Personal Locker Facilities', icon: 'fa-solid fa-lock' },
	{ label: 'Clean & Hygienic Washrooms', icon: 'fa-solid fa-restroom' },
	{ label: 'Dedicated Changing Rooms', icon: 'fa-solid fa-shirt' },
	{ label: 'Well-Maintained Workout Areas', icon: 'fa-solid fa-dumbbell' },
	{ label: 'A Clean, Comfortable and Motivating Atmosphere', icon: 'fa-solid fa-face-smile' },
];

export default function AboutPage() {
	return (
		<div className="bg-[#01010F] text-[#E7E7E7]">
			<PageBanner title="ABOUT US" gradient={false} />
		<div className="py-[150px]">
			<div className="relative max-w-[1320px] mx-auto px-[15px]">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-[100px]">
					<div className="">
						<div className="grid grid-cols-2 gap-[30px]">
							<div className="">
								<div data-scroll="[data-scroll-item]" className="">
									<div data-scroll-cog="" className="hidden">{`
										{
											"scrollTrigger": {
												"trigger": "[data-scroll-item]"
												
											}
										}
									`}</div>
									<div data-scroll-item="" className="group">
										<div className="relative">
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
											<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
											<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
												<img className="" src="/images/home/about1.webp" alt=""/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<div className="relative">
									<div className="pt-[75px]"></div>
									<div data-scroll="[data-scroll-item]" className="">
										<div data-scroll-cog="" className="hidden">{`
											{
												"scrollTrigger": {
													"trigger": "[data-scroll-item]"
													
												}
											}
										`}</div>
										<div data-scroll-item="" className="group">
											<div className="relative">
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
												<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]:scale-y-0 group-[.c-active]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
												<div className="group-[:not(.c-active)]:scale-y-0 group-[:not(.c-active)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
													<img className="" src="/images/home/about2.webp" alt=""/>
												</div>
											</div>
										</div>
									</div>
									<div className="absolute top-0 left-0">
										<img className="bg-[#01010F] rounded-full animate-spin [animation:spin_10s_linear_infinite]" src="/images/home/Circle.svg" alt=""/>
										<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
											<img className="w-[54px] h-[55px]" src="/images/logo-mark-light.svg" alt=""/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="font-teko uppercase">
							<div className="flex items-center gap-[15px]">
								<div className="font-semibold text-[44px] md:text-[60px] leading-[1]">More Than a Gym.</div>
								<div className="font-medium text-[12px] text-[#E22C32] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#E22C32] px-[5px] [writing-mode:tb]">About Us</div>
							</div>
							<div className="font-semibold text-[44px] md:text-[60px] leading-[1] text-[#E22C32]">A Better Way to Live.</div>
						</div>
						<div className="pt-[30px]"></div>
						<div className="flex flex-col gap-[20px]">
							<p className="">Welcome to <span className="text-white font-semibold">RIXA FIT – Premium Fitness Studio, Mahabubnagar</span>, where fitness meets motivation, dedication and professional guidance.</p>
							<p className="">At RIXA FIT, we believe that fitness is not just about building muscles or losing weight. It is about building strength, improving health, developing confidence and creating a healthier lifestyle.</p>
							<p className="">Our goal is to provide a premium and motivating fitness environment where individuals of all fitness levels can work towards their personal goals with the right guidance and support.</p>
						</div>
						<div className="pt-[40px]"></div>
						<div className="flex items-center gap-[10px]">
							<div className="font-teko font-semibold text-[24px] uppercase whitespace-nowrap">RIXA FIT – Moves You</div>
							<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
							<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="pb-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
					{purpose.map((item, i) => (
						<div key={item.title} className="relative border-[1px] border-[#D4D4D4]/30 p-[30px] md:p-[50px]">
							<div className="absolute top-[-1px] left-[-1px] w-[80px] border-t-[4px] border-[#E22C32]"></div>
							<div className="flex items-center gap-[15px]">
								<div className="font-teko font-semibold text-[60px] leading-[1] text-transparent [-webkit-text-stroke:1px_#D4D4D4]">{String(i + 1).padStart(2, '0')}</div>
								<h2 className="font-teko font-semibold text-[36px] leading-[1] uppercase">{item.title}</h2>
							</div>
							<p className="pt-[20px]">{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>

		{/* section */}
		<div className="pb-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-[50px] xl:gap-[100px]">
					<div className="">
						<h2 className="font-teko font-semibold text-[44px] md:text-[60px] leading-[1] uppercase">What Makes <span className="text-[#E22C32] whitespace-nowrap">RIXA FIT</span> Different?</h2>
						<p className="pt-[30px]">At RIXA FIT, we focus on delivering a complete fitness experience through:</p>
						<div className="pt-[30px]">
							<a className="inline-block font-teko text-[20px] uppercase bg-[#971A1E] text-white px-[25px] py-[8px] hover:bg-white hover:text-[#971A1E] transition-colors duration-[.3s]" href={site.joinUrl} target="_blank" rel="noopener noreferrer">
								Join Now
							</a>
						</div>
					</div>
					<ul className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] text-[18px]">
						{highlights.map((item, i) => (
							<li key={item} className="flex items-center gap-[10px] py-[18px] border-b-[2px] border-[#E22C32]/30">
								<span className="w-[30px] shrink-0 font-teko text-[20px] text-[#D4D4D4]">{String(i + 1).padStart(2, '0')}.</span>
								<span className="">{item}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="pb-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
					<div className="border-[10px] border-[#E22C32] bg-[#D4D4D4] text-[#01010F] p-[30px] md:p-[50px]">
						<div className="flex items-center gap-[15px]">
							<i className="fa-solid fa-mobile-screen-button text-[40px] text-[#971A1E]"></i>
							<h2 className="font-teko font-semibold text-[36px] md:text-[44px] leading-[1] uppercase">Personalized Fitness Through Our App</h2>
						</div>
						<p className="pt-[20px]">At RIXA FIT, your fitness journey goes beyond the gym. Through our dedicated fitness app, members can access personalized workout routines and diet plans tailored to their fitness goals.</p>
						<ul className="pt-[20px] flex flex-col gap-[10px]">
							{appFeatures.map((feature) => (
								<li key={feature} className="flex items-start gap-[10px]">
									<i className="fa-solid fa-check text-[#971A1E] pt-[6px]"></i>
									<span className="">{feature}</span>
								</li>
							))}
						</ul>
						<p className="pt-[20px]">Your workout and nutrition guidance is always accessible, making it easier to stay on track wherever you are.</p>
						<div className="pt-[30px] flex flex-wrap items-center gap-[15px]">
							<button type="button" data-app-download="" aria-haspopup="dialog" className="font-teko text-[20px] uppercase bg-[#971A1E] text-white px-[25px] py-[8px] hover:bg-[#01010F] transition-colors duration-[.3s]">
								<i className="fa-solid fa-download mr-[8px]"></i>Download the App
							</button>
							<span className="flex items-center gap-[10px] text-[14px]">
								<i className="fa-brands fa-apple text-[22px]" aria-hidden="true"></i>
								<i className="fa-brands fa-android text-[22px]" aria-hidden="true"></i>
								iPhone &amp; Android
							</span>
						</div>
					</div>
					<div className="border-[1px] border-[#D4D4D4]/30 p-[30px] md:p-[50px]">
						<h2 className="font-teko font-semibold text-[36px] md:text-[44px] leading-[1] uppercase">Comfort &amp; Facilities</h2>
						<p className="pt-[20px]">We believe a comfortable environment is an important part of every fitness journey. That&apos;s why RIXA FIT provides:</p>
						<ul className="pt-[20px] text-[20px]">
							{facilities.map((f) => (
								<li key={f.label} className="flex items-center gap-[15px] py-[15px] border-b-[2px] border-[#E22C32]/30">
									<i className={`${f.icon} w-[24px] text-center text-[#E22C32]`} aria-hidden="true"></i>
									<span className="">{f.label}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="max-w-[900px] mx-auto text-center">
					<h2 className="font-teko font-semibold text-[44px] md:text-[60px] leading-[1] uppercase">Our Commitment</h2>
					<div className="pt-[30px] flex flex-col gap-[20px]">
						<p className="">Every individual has a different fitness goal. Whether you are a beginner starting your fitness journey, someone working towards weight loss, or an experienced fitness enthusiast focused on strength and muscle development, our team is committed to supporting your progress.</p>
						<p className="">At RIXA FIT, your goals matter, your progress inspires us, and your fitness journey is our priority.</p>
					</div>
				</div>
				<div className="pt-[60px]"></div>
				<div className="bg-[#971A1E] text-white px-[30px] md:px-[60px] py-[50px] text-center">
					<div className="font-teko font-semibold text-[36px] md:text-[56px] leading-[1.05] uppercase">Move Better. Feel Stronger. Live Healthier.</div>
					<p className="pt-[20px]">Join RIXA FIT and take the first step towards a stronger, healthier and more confident you.</p>
					<div className="pt-[30px] flex flex-wrap justify-center gap-[15px]">
						<a className="font-teko text-[20px] uppercase bg-white text-[#01010F] px-[25px] py-[8px] hover:bg-[#01010F] hover:text-white transition-colors duration-[.3s]" href={site.joinUrl} target="_blank" rel="noopener noreferrer">
							Join Now
						</a>
						<button type="button" data-app-download="" aria-haspopup="dialog" className="font-teko text-[20px] uppercase border-[1px] border-white px-[25px] py-[8px] hover:bg-white hover:text-[#01010F] transition-colors duration-[.3s]">
							Get the App
						</button>
					</div>
					<div className="pt-[30px] font-teko font-semibold text-[24px] uppercase">RIXA FIT – Moves You</div>
					<div className="text-[14px]">Premium Fitness Studio | Mahabubnagar, Telangana</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="pb-[150px]">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="my-[100px] border-t-[1px] border-[#D4D4D4]"></div>
				<div className="relative font-teko leading-[1] font-semibold text-[60px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[100px] uppercase">
					<div className="">
						<div className="flex gap-[30px]">
							<div className="w-[105px] flex justify-end items-center leading-[.8]">
								<div data-scroll="[data-scroll-item]" className="">
									<div data-scroll-cog="" className="hidden">{`
										{
											"scrollTrigger": {
												"trigger": "[data-scroll-item]"
												
											}
										}
									`}</div>
									<div data-scroll-item="odometer" className="group">
										<div className="odometer" data-v="17"></div>
									</div>
								</div>
								<div className="">+</div>
							</div>
							<div className="border-l-[2px] border-[#E22C32]"></div>
							<div className="text-[24px]">
								<div className="">YEARS OF</div>
								<div className="">SERVICE</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="flex gap-[30px]">
							<div className="w-[105px] flex justify-end items-center leading-[.8]">
								<div data-scroll="[data-scroll-item]" className="">
									<div data-scroll-cog="" className="hidden">{`
										{
											"scrollTrigger": {
												"trigger": "[data-scroll-item]"
												
											}
										}
									`}</div>
									<div data-scroll-item="odometer" className="group">
										<div className="odometer" data-v="29"></div>
									</div>
								</div>
								<div className="">+</div>
							</div>
							<div className="border-l-[2px] border-[#E22C32]"></div>
							<div className="text-[24px]">
								<div className="">FITNESS</div>
								<div className="">TRAINEE</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="flex gap-[30px]">
							<div className="w-[105px] flex justify-end items-center leading-[.8]">
								<div data-scroll="[data-scroll-item]" className="">
									<div data-scroll-cog="" className="hidden">{`
										{
											"scrollTrigger": {
												"trigger": "[data-scroll-item]"
												
											}
										}
									`}</div>
									<div data-scroll-item="odometer" className="group">
										<div className="odometer" data-v="3"></div>
									</div>
								</div>
								<div className="">k</div>
							</div>
							<div className="border-l-[2px] border-[#E22C32]"></div>
							<div className="text-[24px]">
								<div className="">Hours</div>
								<div className="">Trained</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="flex gap-[30px]">
							<div className="w-[105px] flex justify-end items-center leading-[.8]">
								<div data-scroll="[data-scroll-item]" className="">
									<div data-scroll-cog="" className="hidden">{`
										{
											"scrollTrigger": {
												"trigger": "[data-scroll-item]"
												
											}
										}
									`}</div>
									<div data-scroll-item="odometer" className="group">
										<div className="odometer" data-v="69"></div>
									</div>
								</div>
								<div className="">+</div>
							</div>
							<div className="border-l-[2px] border-[#E22C32]"></div>
							<div className="text-[24px]">
								<div className="">Happy</div>
								<div className="">Clients</div>
							</div>
						</div>
					</div>
				</div>
				<div className="my-[100px] border-t-[1px] border-[#D4D4D4]"></div>
				<div className="flex">
					<div className="flex-1">
						<div className="">
							<div className="flex">
								<div className="flex items-center border-r-[1px] border-[#D4D4D4] border-opacity-50">
									<div className="font-teko font-semibold text-[36px] pr-[20px] uppercase [writing-mode:tb]">2013</div>
								</div>
								<div className="">
									<div className="flex">
										<div className="">
											<div className="font-teko font-semibold text-[24px] text-[#E22C32] ps-[30px]">Building Foundations</div>
											<div className="flex items-center gap-[5px] py-[20px]">
												<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
											</div>
										</div>
									</div>
									<div className="ps-[30px]">
										<div className="">Strong basics first - correct form,</div>
										<div className="">mobility and safe technique.</div>
									</div>
								</div>
							</div>
							<div className="my-[100px] border-t-[1px] border-[#D4D4D4]"></div>
							<div className="flex">
								<div className="flex items-center border-r-[1px] border-[#D4D4D4] border-opacity-50">
									<div className="font-teko font-semibold text-[36px] pr-[20px] uppercase [writing-mode:tb]">2017</div>
								</div>
								<div className="">
									<div className="flex">
										<div className="">
											<div className="font-teko font-semibold text-[24px] text-[#E22C32] ps-[30px]">Enhancing Engagement</div>
											<div className="flex items-center gap-[5px] py-[20px]">
												<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
											</div>
										</div>
									</div>
									<div className="ps-[30px]">
										<div className="">Group classes and challenges</div>
										<div className="">that keep you motivated.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="flex flex-col items-center gap-[50px] px-[30px] xl:border-r-[1px] border-l-[1px] border-[#D4D4D4]">
							<div className="">
								<img className="-rotate-90" src="/images/about/arrow.svg" alt=""/>
							</div>
							<div className="font-teko font-semibold text-[60px] uppercase pr-[10px] [writing-mode:tb]">Our Journey</div>
							<div className="">
								<img className="rotate-90" src="/images/about/arrow.svg" alt=""/>
							</div>
						</div>
					</div>
					<div className="hidden xl:block flex-1">
						<div className="">
							<div className="flex justify-end">
								<div className="">
									<div className="flex justify-end">
										<div className="">
											<div className="font-teko font-semibold text-[24px] text-[#E22C32] pr-[30px]">Improved Experience</div>
											<div className="flex items-center gap-[5px] py-[20px]">
												<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
											</div>
										</div>
									</div>
									<div className="pr-[30px] text-right">
										<div className="">Clean, modern facilities with</div>
										<div className="">a welcoming atmosphere.</div>
									</div>
								</div>
								<div className="flex items-center border-l-[1px] border-[#D4D4D4] border-opacity-50">
									<div className="font-teko font-semibold text-[36px] pl-[20px] uppercase [writing-mode:tb]">2019</div>
								</div>
							</div>
							<div className="my-[100px] border-t-[1px] border-[#D4D4D4]"></div>
							<div className="flex justify-end">
								<div className="">
									<div className="flex justify-end">
										<div className="">
											<div className="font-teko font-semibold text-[24px] text-[#E22C32] pr-[30px]">Technological Integration</div>
											<div className="flex items-center gap-[5px] py-[20px]">
												<div className="flex-1 border-t-[1px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[3px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[4px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[7px] border-[#D4D4D4] border-opacity-50"></div>
												<div className="flex-1 border-t-[10px] border-[#D4D4D4] border-opacity-50"></div>
											</div>
										</div>
									</div>
									<div className="pr-[30px] text-right">
										<div className="">Modern equipment and progress</div>
										<div className="">tracking for better results.</div>
									</div>
								</div>
								<div className="flex items-center border-l-[1px] border-[#D4D4D4] border-opacity-50">
									<div className="font-teko font-semibold text-[36px] pl-[20px] uppercase [writing-mode:tb]">2024</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="relative">
			<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
				<div className="hidden xl:block">
					<div className="group relative">
						<div data-scroll="[data-scroll-item]" className="">
							<div data-scroll-cog="" className="hidden">{`
								{
									"scrollTrigger": {
										"trigger": "[data-scroll-item]"
										
									}
								}
							`}</div>
							<div data-scroll-item="" className="group/i">
								<div className="relative">
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="/images/about/gallery1.webp" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#E22C32]">
								<i className="fa-brands fa-instagram"></i>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="hidden xl:block">
					<div className="group relative">
						<div data-scroll="[data-scroll-item]" className="">
							<div data-scroll-cog="" className="hidden">{`
								{
									"scrollTrigger": {
										"trigger": "[data-scroll-item]"
										
									}
								}
							`}</div>
							<div data-scroll-item="" className="group/i">
								<div className="relative">
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-top group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="/images/about/gallery2.webp" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#E22C32]">
								<i className="fa-brands fa-instagram"></i>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="hidden md:block">
					<div className="group relative">
						<div data-scroll="[data-scroll-item]" className="">
							<div data-scroll-cog="" className="hidden">{`
								{
									"scrollTrigger": {
										"trigger": "[data-scroll-item]"
										
									}
								}
							`}</div>
							<div data-scroll-item="" className="group/i">
								<div className="relative">
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="/images/about/gallery3.webp" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#E22C32]">
								<i className="fa-brands fa-instagram"></i>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="">
					<div className="group relative">
						<div data-scroll="[data-scroll-item]" className="">
							<div data-scroll-cog="" className="hidden">{`
								{
									"scrollTrigger": {
										"trigger": "[data-scroll-item]"
										
									}
								}
							`}</div>
							<div data-scroll-item="" className="group/i">
								<div className="relative">
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-top group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="/images/about/gallery4.webp" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#E22C32]">
								<i className="fa-brands fa-instagram"></i>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="">
					<div className="group relative">
						<div data-scroll="[data-scroll-item]" className="">
							<div data-scroll-cog="" className="hidden">{`
								{
									"scrollTrigger": {
										"trigger": "[data-scroll-item]"
										
									}
								}
							`}</div>
							<div data-scroll-item="" className="group/i">
								<div className="relative">
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="origin-top absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="origin-bottom group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<img className="w-full h-[350px] object-cover object-center" src="/images/about/gallery5.webp" alt=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute top-[30px] right-[30px] bottom-[30px] left-[30px]">
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-[20px] text-[70px] text-[#E22C32]">
								<i className="fa-brands fa-instagram"></i>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
			<div className="group absolute top-0 bottom-0 left-[50px] my-auto h-[60px] w-[60px] hidden md:flex justify-center items-center gallery-prev">
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
				<div className="relative">
					<div className="relative font-teko font-medium text-[20px]">
						<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<img className="" src="/images/home/hero-prev.svg" alt=""/>
						</div>
						<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<img className="" src="/images/home/hero-prev.svg" alt=""/>
						</div>
					</div>
				</div>
			</div>
			<div className="group absolute top-0 right-[50px] bottom-0 my-auto h-[60px] w-[60px] hidden md:flex justify-center items-center gallery-prev">
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-white bg-opacity-25 rounded-full group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
				<div className="relative">
					<div className="relative font-teko font-medium text-[20px]">
						<div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<img className="" src="/images/home/hero-next.svg" alt=""/>
						</div>
						<div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
							<img className="" src="/images/home/hero-next.svg" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* section */}
		<div className="py-[150px]">
			<Testimonials />
		</div>

		{/* section */}
		<div className="">
			<div className="max-w-[1320px] mx-auto px-[15px]">
				<div className="xl:flex">
					<div className="flex-1 relative hidden xl:flex items-center">
						<div className="absolute top-0 right-0 bottom-0 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
						<div className="absolute top-0 right-0 bottom-0 m-auto h-3/4 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
						<div className="absolute top-0 right-0 bottom-0 m-auto h-2/4 w-1/2 border-[1px] border-[#E22C32] rounded-bl-full rounded-tl-full"></div>
						<div className="relative bg-[#971A1E] py-[10px] px-[30px]">Whether you're a beginner</div>
						<div className="flex-1 border-t-[1px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[3px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[4px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[7px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[10px] border-[#E22C32]"></div>
					</div>
					<div className="border-[10px] border-[#E22C32] bg-[#D4D4D4] text-[#01010F]">
						<div data-scroll="[data-scroll-item]" className="">
							<div data-scroll-cog="" className="hidden">{`
								{
									"scrollTrigger": {
										"trigger": "[data-scroll-item]"
										
									}
								}
							`}</div>
							<div data-scroll-item="" className="group/i">
								<div className="relative">
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D4D4D4] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
									<div className="absolute top-0 right-0 bottom-0 left-0 bg-[#971A1E] group-[.c-active]/i:scale-y-0 group-[.c-active]/i:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
									<div className="group-[:not(.c-active)]/i:scale-y-0 group-[:not(.c-active)]/i:delay-0 delay-[.4s] transition-all duration-[.3s]">
										<div className="p-[50px]">
											<div className="text-center pb-[10px]">
												<div className="font-teko font-semibold text-[36px]">SUBSCRIBE TO OUR NEWSLETTER</div>
											</div>
											<NewsletterForm />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex-1 relative hidden xl:flex items-center">
						<div className="absolute top-0 left-0 bottom-0 w-1/2 border-[1px] border-[#E22C32] rounded-br-full rounded-tr-full"></div>
						<div className="absolute top-0 left-0 bottom-0 m-auto h-3/4 w-1/2 border-[1px] border-[#E22C32] rounded-br-full rounded-tr-full"></div>
						<div className="absolute top-0 left-0 bottom-0 m-auto h-2/4 w-1/2 border-[1px] border-[#E22C32] rounded-br-full rounded-tr-full"></div>
						<div className="flex-1 border-t-[10px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[7px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[4px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[3px] border-[#E22C32]"></div>
						<div className="flex-1 border-t-[1px] border-[#E22C32]"></div>
						<div className="relative bg-[#971A1E] py-[10px] px-[30px]">Seasoned fitness enthusiast</div>
					</div>
				</div>
			</div>
		</div>

		</div>
	);
}
