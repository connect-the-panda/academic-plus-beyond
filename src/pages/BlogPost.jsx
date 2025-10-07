import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const blogContent = {
  'metacognition-academic-success': {
    title: 'The Power of Metacognition: Thinking About How You Think',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Learning Strategies',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80',
    content: `
      <p>Metacognition—literally "thinking about thinking"—is one of the most powerful tools in a student's arsenal. It's the ability to step back and observe your own cognitive processes, to understand not just what you're learning, but how you're learning it.</p>

      <h2>What Is Metacognition?</h2>
      <p>At its core, metacognition involves two key components:</p>
      <ul>
        <li><strong>Metacognitive knowledge</strong>: Understanding your own learning preferences, strengths, and weaknesses</li>
        <li><strong>Metacognitive regulation</strong>: Planning, monitoring, and evaluating your learning strategies</li>
      </ul>

      <h2>Why Does It Matter?</h2>
      <p>Research consistently shows that students who employ metacognitive strategies outperform their peers. When you understand how you learn best, you can:</p>
      <ul>
        <li>Identify gaps in your understanding before they become problems</li>
        <li>Adapt your study strategies to different subjects and challenges</li>
        <li>Build confidence through self-awareness</li>
        <li>Develop independent learning skills that last a lifetime</li>
      </ul>

      <h2>Practical Metacognitive Strategies</h2>
      <p><strong>1. The Pre-Study Reflection</strong></p>
      <p>Before diving into a study session, ask yourself: What do I already know about this topic? What do I need to learn? What strategies have worked for me in similar situations?</p>

      <p><strong>2. Active Monitoring</strong></p>
      <p>While studying, periodically pause and check in: Am I understanding this material? If not, what's causing the confusion? Should I adjust my approach?</p>

      <p><strong>3. Post-Study Evaluation</strong></p>
      <p>After completing your work, reflect: What worked well? What would I do differently next time? How can I apply these lessons to future learning?</p>

      <h2>Building Your Metacognitive Muscle</h2>
      <p>Like any skill, metacognition improves with practice. Start small—perhaps with a single reflection question after each study session. Over time, this self-awareness becomes automatic, transforming not just how you study, but how you approach challenges in all areas of life.</p>

      <p>The beauty of metacognition is that it's a transferable skill. Whether you're writing an essay, solving a complex problem, or navigating a difficult conversation, the ability to think about your thinking gives you a strategic advantage.</p>
    `
  },
  'flow-state-productivity': {
    title: 'Achieving Flow State: The Science of Peak Performance',
    date: '2024-03-08',
    readTime: '7 min read',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80',
    content: `
      <p>Flow state—that magical moment when time seems to disappear and you're completely absorbed in your work—isn't just a pleasant accident. It's a scientifically documented psychological state that you can learn to access consistently.</p>

      <h2>Understanding Flow</h2>
      <p>Psychologist Mihaly Csikszentmihalyi first identified flow as a state of complete immersion in an activity. During flow, you experience:</p>
      <ul>
        <li>Complete focus on the present task</li>
        <li>A sense of control and confidence</li>
        <li>Loss of self-consciousness</li>
        <li>Distorted sense of time</li>
        <li>Intrinsic motivation and satisfaction</li>
      </ul>

      <h2>The Flow Formula</h2>
      <p>Achieving flow requires a delicate balance between challenge and skill. The task must be difficult enough to engage you, but not so hard that it causes anxiety. This "sweet spot" varies for each person and each task.</p>

      <h3>Key Conditions for Flow:</h3>
      <p><strong>1. Clear Goals</strong></p>
      <p>You need to know exactly what you're trying to accomplish. Vague objectives scatter your attention and prevent deep focus.</p>

      <p><strong>2. Immediate Feedback</strong></p>
      <p>The ability to see progress—whether through completed sections of an essay or solved problems—reinforces engagement and keeps you in the zone.</p>

      <p><strong>3. Challenge-Skill Balance</strong></p>
      <p>The task should stretch your abilities without overwhelming them. Too easy and you're bored; too hard and you're anxious.</p>

      <h2>Creating Flow-Friendly Environments</h2>
      <p>Your environment plays a crucial role in accessing flow states:</p>
      <ul>
        <li><strong>Eliminate distractions</strong>: Turn off notifications, close unnecessary tabs, create a dedicated workspace</li>
        <li><strong>Batch similar tasks</strong>: Context-switching kills flow; group related activities together</li>
        <li><strong>Time-block deep work</strong>: Protect specific hours for focused, uninterrupted work</li>
        <li><strong>Optimize your physical state</strong>: Stay hydrated, well-rested, and properly nourished</li>
      </ul>

      <h2>Flow in Academic Work</h2>
      <p>For students and writers, flow state is particularly valuable. Writing, research, and problem-solving all benefit from sustained, deep concentration. By intentionally designing your work sessions to facilitate flow, you can accomplish more in less time while enjoying the process more fully.</p>

      <p>Remember: flow is a skill, not a gift. With practice and the right conditions, you can access this state of peak performance whenever you need it most.</p>
    `
  },
  'academic-writing-clarity': {
    title: 'Writing with Clarity: Principles for Academic Excellence',
    date: '2024-03-01',
    readTime: '6 min read',
    category: 'Writing Skills',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80',
    content: `
      <p>Clear writing isn't just about following grammatical rules—it's about respecting your reader's time and mental energy. In academic contexts, clarity is the difference between a compelling argument and a confusing mess.</p>

      <h2>The Foundation: Think Before You Write</h2>
      <p>The clarity of your writing reflects the clarity of your thinking. Before putting words on the page, ask yourself:</p>
      <ul>
        <li>What is my main argument or thesis?</li>
        <li>Who is my audience, and what do they need to know?</li>
        <li>What evidence supports my position?</li>
        <li>How do my ideas connect logically?</li>
      </ul>

      <h2>Principles of Clear Academic Writing</h2>

      <h3>1. One Idea Per Sentence</h3>
      <p>Dense, multi-clause sentences force readers to work too hard. Break complex thoughts into digestible pieces. Compare:</p>
      <p><em>Unclear:</em> "The study, which was conducted over three years and involved 500 participants from various backgrounds, found that students who employed metacognitive strategies, particularly those related to self-monitoring and reflection, performed significantly better."</p>
      <p><em>Clear:</em> "A three-year study tracked 500 diverse participants. Students who used metacognitive strategies—especially self-monitoring and reflection—performed significantly better."</p>

      <h3>2. Active Voice Whenever Possible</h3>
      <p>Passive voice obscures agency and adds unnecessary words. Write "The researcher analyzed the data" not "The data was analyzed by the researcher." Save passive voice for when the actor truly doesn't matter or is unknown.</p>

      <h3>3. Concrete Language Over Abstractions</h3>
      <p>Abstract concepts are necessary in academic writing, but ground them in specific examples. Don't just say "improved performance"—specify "test scores increased by 15%" or "students completed essays one day faster."</p>

      <h3>4. Strategic Paragraph Structure</h3>
      <p>Each paragraph should develop one main idea, typically introduced in a clear topic sentence. Subsequent sentences support, explain, or provide evidence for that idea. The final sentence often transitions to the next paragraph.</p>

      <h2>The Revision Process: Where Clarity Happens</h2>
      <p>First drafts are for getting ideas down; subsequent drafts are for making those ideas clear. When revising for clarity:</p>
      <ul>
        <li><strong>Read aloud</strong>: Your ear catches awkward phrasing your eye might miss</li>
        <li><strong>Cut ruthlessly</strong>: Every word should earn its place; eliminate redundancy and filler</li>
        <li><strong>Check transitions</strong>: Readers should never wonder how you got from point A to point B</li>
        <li><strong>Test for understanding</strong>: Can someone unfamiliar with your topic follow your argument?</li>
      </ul>

      <h2>Common Clarity Killers</h2>
      <ul>
        <li><strong>Jargon without definition</strong>: Specialized terms have their place, but define them for your audience</li>
        <li><strong>Nominalizations</strong>: Converting verbs to nouns ("make a decision" vs. "decide") adds bulk without value</li>
        <li><strong>Hedging language</strong>: Excessive qualifiers ("somewhat," "perhaps," "arguably") undermine your authority</li>
        <li><strong>Unclear pronouns</strong>: Make sure every "it," "this," and "they" has an obvious referent</li>
      </ul>

      <h2>Practice Makes Permanent</h2>
      <p>Writing with clarity is a learnable skill. Each piece you write is an opportunity to practice these principles. Over time, clear thinking and clear writing become inseparable—each reinforcing the other.</p>
    `
  },
  'transferable-skills-beyond-classroom': {
    title: 'Beyond the Classroom: Building Transferable Skills for Life',
    date: '2024-02-22',
    readTime: '5 min read',
    category: 'Personal Development',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80',
    content: `
      <p>Academic skills aren't just for acing tests and writing papers. The most valuable lessons from your education are the transferable skills—the abilities that serve you in every context, long after you've forgotten the specific content of your coursework.</p>

      <h2>What Makes a Skill Transferable?</h2>
      <p>Transferable skills are those that apply across different domains, contexts, and challenges. They're the "meta-skills" that make all other learning and performance possible.</p>

      <h2>Core Transferable Skills from Academic Work</h2>

      <h3>1. Critical Thinking</h3>
      <p>Every time you analyze an argument, evaluate evidence, or identify logical fallacies in your academic work, you're building thinking skills that apply to:</p>
      <ul>
        <li>Making informed decisions about health, finance, and relationships</li>
        <li>Evaluating news sources and claims in the media</li>
        <li>Solving problems in professional contexts</li>
        <li>Understanding complex systems and their interactions</li>
      </ul>

      <h3>2. Research and Information Literacy</h3>
      <p>Learning to find, evaluate, and synthesize information isn't just about writing research papers. These skills help you:</p>
      <ul>
        <li>Make informed purchases and life decisions</li>
        <li>Learn new skills independently throughout your career</li>
        <li>Distinguish credible sources from misinformation</li>
        <li>Stay current in rapidly evolving fields</li>
      </ul>

      <h3>3. Communication</h3>
      <p>Whether written or oral, the ability to express complex ideas clearly translates directly to:</p>
      <ul>
        <li>Professional presentations and reports</li>
        <li>Negotiating effectively in personal and business contexts</li>
        <li>Building and maintaining relationships</li>
        <li>Advocating for yourself and others</li>
      </ul>

      <h3>4. Self-Regulation and Time Management</h3>
      <p>The discipline of managing long-term projects, meeting deadlines, and balancing competing demands develops into:</p>
      <ul>
        <li>Project management capabilities in professional settings</li>
        <li>The ability to pursue personal goals alongside career demands</li>
        <li>Resilience in the face of setbacks</li>
        <li>Strategic prioritization of limited resources</li>
      </ul>

      <h2>Metacognition: The Ultimate Transferable Skill</h2>
      <p>Perhaps the most valuable transferable skill is metacognition itself—the ability to reflect on and direct your own thinking and learning. This meta-skill enables all others because it allows you to:</p>
      <ul>
        <li>Recognize when you need to learn something new</li>
        <li>Choose appropriate strategies for different challenges</li>
        <li>Monitor your progress and adjust course when needed</li>
        <li>Transfer learning from one domain to another intentionally</li>
      </ul>

      <h2>Intentional Skill Transfer</h2>
      <p>Skills don't automatically transfer—you need to recognize the connections. When working on academic tasks, explicitly identify the broader applications:</p>
      <ul>
        <li>"This research process is similar to how I'd evaluate job offers or investment opportunities"</li>
        <li>"The way I'm organizing this essay mirrors how I'd structure a business proposal"</li>
        <li>"These critical reading skills help me understand contracts and agreements"</li>
      </ul>

      <h2>The Long View</h2>
      <p>Your education is about far more than grades and credentials. It's an opportunity to build a foundation of transferable skills that compound over time. The student who develops strong metacognitive, communication, and critical thinking skills doesn't just excel academically—they excel at life.</p>

      <p>By recognizing the transferable nature of what you're learning, you transform every assignment from a mere requirement into an investment in your lifelong capabilities.</p>
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogContent[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300 flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-light text-sm tracking-widest hover:text-indigo-200 transition-colors">
            Academic + Beyond
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-white hover:text-indigo-200 transition-colors">
              Home
            </Link>
            <Link to="/blog" className="text-white hover:text-indigo-200 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Back to Blog Link */}
      <div className="container mx-auto px-6 pt-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-indigo-300 mb-6">
            <span className="px-3 py-1 bg-blue-600/30 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {post.title}
          </h1>

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-indigo-100 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-indigo-100 prose-ul:my-6
              prose-li:my-2
              prose-strong:text-white prose-strong:font-semibold
              prose-em:text-indigo-200"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}
