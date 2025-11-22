import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Disclaimer Principal */}
        <Alert className="mb-8 border-yellow-500/50 bg-yellow-50 dark:bg-yellow-950/30">
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
          <AlertDescription className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>Site Independente - Não Oficial:</strong> O Socio-Guide não possui vínculo com Gov.br, INSS, 
            Ministério do Desenvolvimento Social (MDS) ou Caixa Econômica Federal. Todas as informações e simuladores 
            fornecem <strong>estimativas educacionais</strong>. Para procedimentos oficiais e valores definitivos, 
            consulte sempre os canais oficiais: <a href="https://www.gov.br" target="_blank" rel="noopener noreferrer" className="underline font-semibold">gov.br</a>, 
            INSS (135), ou Caixa (111).
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="font-bold text-lg mb-4">Socio-Guide</h3>
            <p className="text-sm text-secondary-foreground/90 mb-4">
              Portal informativo sobre benefícios sociais brasileiros. Guias, simuladores e conteúdo atualizado para 
              ajudar você a entender seus direitos.
            </p>
          </div>

          {/* Links Legais */}
          <div>
            <h3 className="font-bold text-lg mb-4">Informações Legais</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/politica-de-privacidade" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors underline-offset-4 hover:underline">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors underline-offset-4 hover:underline">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors underline-offset-4 hover:underline">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors underline-offset-4 hover:underline">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/calculadoras" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors underline-offset-4 hover:underline">
                  Simuladores Gratuitos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors underline-offset-4 hover:underline">
                  Blog e Artigos
                </Link>
              </li>
              <li>
                <Link to="/simulador-bolsa-familia-2026" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors underline-offset-4 hover:underline">
                  Simulador Bolsa Família 2026
                </Link>
              </li>
            </ul>
          </div>

          {/* Canais Oficiais */}
          <div>
            <h3 className="font-bold text-lg mb-4">Canais Oficiais</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.gov.br" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors underline-offset-4 hover:underline">
                  Gov.br - Portal Oficial
                </a>
              </li>
              <li>
                <a href="https://meu.inss.gov.br" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors underline-offset-4 hover:underline">
                  Meu INSS
                </a>
              </li>
              <li>
                <a href="https://www.caixa.gov.br" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors underline-offset-4 hover:underline">
                  Caixa Econômica Federal
                </a>
              </li>
              <li>
                <a href="https://www.gov.br/cidadania" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors underline-offset-4 hover:underline">
                  Ministério Desenvolvimento Social
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/70">
          <p>© {new Date().getFullYear()} Socio-Guide. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">
            Site educacional independente - Não somos órgão governamental
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;