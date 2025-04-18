const favicon = new Proxy({"src":"/_astro/favicon.CFBgPeys.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/favicon.png";
							}
							
							return target[name];
						}
					});

export { favicon as f };
