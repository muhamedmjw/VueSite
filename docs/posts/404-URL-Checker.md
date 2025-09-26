# [Muhammed Mustafa](../README.md)

[/posts](/posts/README.md) [/about](/about/README.md)

[~](../README.md) / [posts](/posts/README.md) / [404 URL Checker](/posts/post1.md)

## Building a Python Web Crawler to Find 404 Errors


*Published: August 16, 2025*

Have you ever clicked on a link only to be greeted by the dreaded "404 Not Found" page? As a web developer, broken links are more than just annoying—they hurt user experience, damage SEO rankings, and make your site look unprofessional. That's why I built a Python tool to automatically crawl websites and hunt down these digital dead ends.

### The Problem with Broken Links

Websites evolve constantly. Pages get moved, renamed, or deleted. External resources disappear. What starts as a perfectly functional site can gradually accumulate broken links like digital rust. Manual checking is tedious and error-prone, especially for large sites with hundreds of pages.

Search engines like Google penalize sites with too many 404 errors, and users quickly lose trust in sites that lead them nowhere. The solution? Automated detection.

### Building the 404 Finder

My approach breaks down into four key components:

**1. HTML Parsing (`link_extractor.py`)**
Using BeautifulSoup, the tool extracts every `<a>` tag from each page it visits. This gives us a comprehensive list of all links that users might click.

**2. URL Processing (`url_utils.py`)**
Raw HTML often contains relative URLs like `../about.html` or `/contact`. The tool converts these to absolute URLs and filters out external domains—we only want to check links within the target website.

**3. HTTP Status Checking (`http_checker.py`)**
For each URL, the tool makes an HTTP request and checks the response code. 404 means "Not Found," but the tool also catches other error codes that indicate broken links.

**4. Recursive Crawling (`crawler.py`)**
This is where the magic happens. Starting from the homepage, the tool visits every page it finds, extracts links from each, and continues crawling until it has checked the entire site.

### Real-World Results

The tool provides clean, actionable output:

```bash
=== CRAWL COMPLETE ===
Found 3 broken links:
1. https://example.com/old-page 
2. https://example.com/missing-file.pdf 
3. https://example.com/broken-link 
```

During development, I tested it on several websites, and one e-commerce site I checked had over 20 404 errors that were hurting their SEO.

### Technical Challenges

**Rate Limiting**: Crawling too aggressively can overwhelm servers or trigger anti-bot measures. The tool includes configurable delays between requests.

**Infinite Loops**: Some sites have circular link structures. I implemented visited URL tracking to prevent endless crawling.

**Dynamic Content**: JavaScript-generated links aren't captured by simple HTML parsing. This is a known limitation for static analysis tools.

### Usage and Impact

The tool is designed for simplicity—just run `python main.py` and enter a URL. It's perfect for:

- **Regular maintenance**: Run weekly checks to catch broken links early
- **Pre-deployment testing**: Validate all links before pushing site updates
- **SEO audits**: Identify 404s that might be hurting search rankings
- **Competitive analysis**: Check competitors' sites for link quality


### Open Source

The complete source code is available on GitHub. It's built with Python 3.6+ and uses libraries like BeautifulSoup and requests. The modular structure makes it easy to extend or customize for specific needs.

---

Check out the [GitHub repository](https://github.com/muhamedmjw/404-URL-Checker)