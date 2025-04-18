const testi1 = new Proxy({"src":"/_astro/testi1.B2HLHp10.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/testi1.png";
							}
							
							return target[name];
						}
					});

const testi2 = new Proxy({"src":"/_astro/testi2.BubjYWGK.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/testi2.png";
							}
							
							return target[name];
						}
					});

const testi3 = new Proxy({"src":"/_astro/testi3.Czqvjtpv.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/testi3.png";
							}
							
							return target[name];
						}
					});

const testi4 = new Proxy({"src":"/_astro/testi4.lVY8nfl4.png","width":250,"height":250,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/try/astro/src/assets/testi4.png";
							}
							
							return target[name];
						}
					});

export { testi2 as a, testi3 as b, testi4 as c, testi1 as t };
