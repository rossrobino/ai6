import { origin } from "@/lib/constants";
import * as z from "@/lib/schema";
import * as chat from "@/server/chat";
import * as home from "@/server/home";
import { Layout } from "@/server/layout";
import { BackButton } from "@/ui/back-button";
import { chunk, html } from "client:page";
import * as ovr from "ovr";

const app = new ovr.App();

app.base = html;

app.notFound = (c) => {
	c.layout(Layout);
	return c.page(
		<div>
			<h1>Not Found</h1>
			<home.page.Anchor>Return Home</home.page.Anchor>
		</div>,
		404,
	);
};

app.error = (c, error) => {
	if (error instanceof z.ZodError) {
		const validationError = "Validation Error";

		c.head(<title>{validationError}</title>);

		return c.page(
			<>
				<h1>{validationError}</h1>

				{error.issues.map((issue) => {
					return (
						<>
							<h2>{issue.path.join(", ")}</h2>
							<p>{issue.message}</p>
						</>
					);
				})}

				<BackButton>Go Back</BackButton>
			</>,
			500,
		);
	}

	const defaultMessage = "Internal server error";
	c.head(<title>{defaultMessage}</title>);
	c.html(defaultMessage, 500);
};

app.use(ovr.csrf({ origin }), (c, next) => {
	c.head(
		chunk.src.assets.map((path) => (
			<link
				rel="preload"
				href={`/${path}`}
				as="font"
				type="font/woff2"
				crossorigin
			/>
		)),
	);

	c.layout(Layout);

	return next();
});

app.add(home, chat);

if (import.meta.env.DEV) {
	const test = await import("@/server/test");
	app.add(test);
}

app.prerender = [home.page.pattern];

export default app;
