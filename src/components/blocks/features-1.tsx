import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Target, Workflow, Layers, MessageSquare, Cpu, ShieldCheck } from 'lucide-react'
import { ReactNode } from 'react'

export function Features() {
    const features = [
        {
            title: "Business problem first",
            description: "We don't start with the technology. We start with what isn't working.",
            icon: Target
        },
        {
            title: "Built around the way you work",
            description: "Your business shouldn't have to completely change how it works just to fit the software.",
            icon: Workflow
        },
        {
            title: "Start small, grow big",
            description: "Start with what you need now. Add connected tools, automatic tasks, and software as the business grows.",
            icon: Layers
        },
        {
            title: "Plain language",
            description: "You don't need to know APIs, databases or AI agents. Tell us the business problem.",
            icon: MessageSquare
        },
        {
            title: "Practical technology",
            description: "We use AI and automation where they actually save time or improve operations, not just because they're trendy.",
            icon: Cpu
        },
        {
            title: "Clear ownership",
            description: "You own the final website and the systems we build for you. No hidden lock-ins.",
            icon: ShieldCheck
        }
    ]

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl font-display tracking-tight text-[var(--color-ink)]">Why A27</h2>
                    <p className="mt-4 text-[var(--color-muted)] max-w-2xl mx-auto">Built around how your business actually operates instead of forcing you into a generic template.</p>
                </div>
                
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                    {features.map((feature, idx) => (
                        <Card key={idx} className="group flex flex-col justify-between">
                            <CardHeader className="pb-4 pt-8">
                                <CardDecorator>
                                    <feature.icon className="size-6 text-[var(--color-accent)]" aria-hidden />
                                </CardDecorator>
                                <h3 className="mt-8 font-display font-semibold text-lg text-[var(--color-ink)]">{feature.title}</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-[var(--color-muted)]">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 [--border:var(--color-rule)] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"/>
        <div className="bg-[var(--color-paper)] absolute inset-0 m-auto flex size-12 items-center justify-center border border-[var(--color-rule)] rounded-[var(--radius-md)] group-hover:border-[var(--color-accent)] transition-colors duration-300">
            {children}
        </div>
    </div>
)
