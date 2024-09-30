import './App.css';
import { useChat } from 'ai/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LoadingIcon } from '@/components/icons/loading-icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, Trash, WandSparkles } from 'lucide-react';
import { API_URL } from '@/config/config';
import { Badge } from '@/components/ui/badge';
import { ThemeProvider } from '@/providers/theme-provider';

function App() {
  const { messages, input, handleInputChange, handleSubmit, setMessages, isLoading } = useChat({
    api: API_URL,
  });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full p-6">
        <div className="mb-4 flex w-full gap-4">
          <Card className="flex-1 cursor-pointer hover:bg-neutral-900">
            <CardTitle className="mx-auto p-4 text-center">
              <div className="flex flex-col items-center justify-center gap-2 font-medium">
                <MessageCircle size={16} />
                Chat
              </div>
            </CardTitle>
          </Card>
          <Card className="flex-1 cursor-pointer hover:bg-neutral-900">
            <CardTitle className="mx-auto p-4 text-center">
              <div className="flex flex-col items-center justify-center gap-2 font-medium">
                <WandSparkles size={16} />
                Enhancer
              </div>
            </CardTitle>
          </Card>
        </div>
        <div className="mb-24 flex flex-col space-y-4">
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              <Card>
                <CardHeader className="p-4 pb-0">
                  <Badge className={cn('w-fit', m.role !== 'user' && 'bg-blue-300')}>{m.role === 'user' ? 'User' : 'AI'}</Badge>
                </CardHeader>
                <CardContent className="p-4 pt-2">{m.content}</CardContent>
              </Card>
            </div>
          ))}
          {isLoading && (
            <div className="mx-auto w-fit">
              <LoadingIcon />
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="fixed bottom-8 box-border w-[calc(100%-48px)]">
          <div className="flex space-x-2 text-center">
            <Input className="flex-1 rounded bg-background p-2" value={input} placeholder="Say something..." onChange={handleInputChange} />
            <Button type="submit" variant="secondary" size="icon" asChild>
              <div>
                <Send size={16} />
              </div>
            </Button>
            <Button type="button" variant="ghost" size="icon" asChild onClick={() => setMessages([])}>
              <div>
                <Trash size={16} />
              </div>
            </Button>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default App;
