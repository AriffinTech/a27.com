import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { getWhatsAppUrl } from '@/config/contact'
import { Check } from 'lucide-react'

export function Pricing() {
    return (
        <div>
            <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-3">
                
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Website Starter</CardTitle>
                        <span className="my-3 block font-mono text-xl font-bold tracking-tight text-[var(--color-ink)]">From RM399</span>
                        <CardDescription>A clean, professional website to get your business online and make it easy for customers to reach you.</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <hr className="border-t border-[var(--color-rule)]" />

                        <ul className="list-outside space-y-3 text-[var(--text-sm)] text-[var(--color-ink-2)]">
                            {[
                                'Landing page or simple business website',
                                'Mobile-responsive design',
                                'WhatsApp & contact CTAs',
                                'Basic SEO setup',
                                'A clear plan for the work',
                                'Defined revision rounds',
                                'Ready for your own domain'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <Check className="mt-0.5 size-4 flex-shrink-0 text-[var(--color-muted)]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>

                    <CardFooter className="mt-auto">
                        <Button asChild variant="secondary" className="w-full">
                            <a href={getWhatsAppUrl("Hello A27, I’m interested in the Website Starter package.")} target="_blank" rel="noopener noreferrer">Discuss Website Starter</a>
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="relative flex flex-col mt-6 md:mt-0">
                    <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-3 py-1 text-[var(--text-xs)] font-medium text-[var(--color-accent-ink)] ring-1 ring-inset ring-[var(--color-accent)] shadow-[0_0_12px_color-mix(in_srgb,var(--color-accent)_40%,transparent)]">MOST POPULAR</span>

                    <CardHeader>
                        <CardTitle>Website + Connected Tools</CardTitle>
                        <span className="my-3 block font-mono text-xl font-bold tracking-tight text-[var(--color-ink)]">From RM699</span>
                        <CardDescription>More than just a website. Connect your site to the tools you already use, so customer enquiries are easier to manage.</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <hr className="border-t border-[var(--color-rule)]" />
                        <ul className="list-outside space-y-3 text-[var(--text-sm)] text-[var(--color-ink-2)]">
                            {[
                                'Everything in Website Starter',
                                'Lead capture forms',
                                'WhatsApp enquiry flow',
                                'Connect Google Sheets or your customer list',
                                'Send bookings or enquiries to the right place',
                                'Product or service catalogue',
                                'Payment links where needed',
                                'Automatic steps for repeated tasks',
                                'Basic team setup and a walkthrough'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <Check className="mt-0.5 size-4 flex-shrink-0 text-[var(--color-muted)]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>

                    <CardFooter className="mt-auto">
                        <Button asChild variant="primary" className="w-full">
                            <a href={getWhatsAppUrl("Hello A27, I’m interested in the Website + Connected Tools package.")} target="_blank" rel="noopener noreferrer">Discuss This Package</a>
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Custom Tools & Automation</CardTitle>
                        <span className="my-3 block font-mono text-xl font-bold tracking-tight text-[var(--color-ink)]">Custom Quotation</span>
                        <CardDescription>For businesses that need a tool made for their team, a way to connect existing tools, or automatic steps beyond a standard website.</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <hr className="border-t border-[var(--color-rule)]" />

                        <ul className="list-outside space-y-3 text-[var(--text-sm)] text-[var(--color-ink-2)]">
                            {[
                                'WhatsApp replies and follow-ups',
                                'Tools to manage orders',
                                'Steps for taking and tracking payments',
                                'Automatic invoices and receipts',
                                'Connect courier and postage services',
                                'Team dashboards',
                                'Tools for staff and admin work',
                                'Point-of-sale tools',
                                'Tools to manage customer leads and daily work',
                                'Connect third-party services through an API',
                                'Custom AI help',
                                'Business software made for you'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <Check className="mt-0.5 size-4 flex-shrink-0 text-[var(--color-muted)]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>

                    <CardFooter className="mt-auto">
                        <Button asChild variant="secondary" className="w-full">
                            <a href={getWhatsAppUrl("Hello A27, I’d like to discuss a custom system or automation need.")} target="_blank" rel="noopener noreferrer">Discuss Your Needs</a>
                        </Button>
                    </CardFooter>
                </Card>

            </div>
        </div>
    )
}
