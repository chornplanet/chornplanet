import type {IPolicy, IPolicyContent} from "@/lib/model/IPolicy";

type PolicyPageProps = {
    policy: IPolicy;
    eyebrow: string;
    accent: string;
};

function hasHtml(value: string | undefined): value is string {
    return typeof value === 'string' && value.trim().length > 0;
}

function renderPolicyBody(item: IPolicyContent) {
    if (item.details && item.details.length > 0) {
        return (
            <div className="policy-page__details">
                {item.details.map((detail, index) => (
                    <div key={`${detail.title}-${index}`} className="policy-page__detail">
                        <p
                            className="policy-page__detail-title"
                            dangerouslySetInnerHTML={{__html: detail.title}}
                        />
                        <p dangerouslySetInnerHTML={{__html: detail.description}}/>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="policy-page__body">
            {hasHtml(item.description) && (
                <p dangerouslySetInnerHTML={{__html: item.description}}/>
            )}
            {hasHtml(item.expand) && (
                <p dangerouslySetInnerHTML={{__html: item.expand}}/>
            )}
        </div>
    );
}

export default function PolicyPage({policy, eyebrow, accent}: PolicyPageProps) {
    const sections = policy.contents ?? [];

    return (
        <main className={`platform-page policy-page policy-page--${accent}`}>
            <section className="policy-page__hero">
                <div className="platform-shell policy-page__hero-inner">
                    <div className="policy-page__hero-copy">
                        <span className="platform-eyebrow">{eyebrow}</span>
                        <h1>{policy.title}</h1>
                        {hasHtml(policy.subTitle) && <h2>{policy.subTitle}</h2>}
                        {hasHtml(policy.description) && <p>{policy.description}</p>}
                    </div>
                    <aside className="policy-page__summary" aria-label={`${policy.title} summary`}>
                        <span>Public Document</span>
                        <strong>{sections.length}</strong>
                        <small>{sections.length === 1 ? 'section' : 'sections'}</small>
                    </aside>
                </div>
            </section>

            <section className="platform-shell policy-page__content" aria-label={`${policy.title} sections`}>
                {sections.map((item, index) => (
                    <article key={`${item.title}-${index}`} className="policy-page__section">
                        <div className="policy-page__section-index">
                            {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="policy-page__section-content">
                            {hasHtml(item.title) && <h3>{item.title}</h3>}
                            {renderPolicyBody(item)}
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}
