import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const TermosUso = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | Socio-Guide - Auxílios BR</title>
        <meta name="description" content="Termos de Uso e Isenção de Responsabilidade do Socio-Guide. Site independente, não oficial do Gov.br/INSS/MDS/Caixa." />
        <link rel="canonical" href="https://auxiliosbr.com.br/termos-de-uso" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="bg-gradient-to-br from-secondary via-secondary/90 to-primary py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link to="/">
              <Button variant="ghost" className="mb-4 text-white hover:text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white">
              Termos de Uso
            </h1>
            <p className="text-white/90 mt-2">
              Última atualização: 22 de novembro de 2025
            </p>
          </div>
        </div>

        <article className="container mx-auto max-w-4xl py-12 px-4 prose prose-lg max-w-none">
          <Alert className="mb-8 border-yellow-500 bg-yellow-50 dark:bg-yellow-950">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            <AlertDescription className="text-yellow-800 dark:text-yellow-200">
              <strong>IMPORTANTE - ISENÇÃO DE RESPONSABILIDADE:</strong> O Socio-Guide (auxiliosbr.com.br) é um site 
              <strong> independente e não oficial</strong>. Não temos vínculo com Gov.br, INSS, Ministério do Desenvolvimento 
              Social (MDS), Caixa Econômica Federal ou qualquer outro órgão governamental. Todos os simuladores e calculadoras 
              fornecem <strong>estimativas</strong> baseadas em dados públicos. Para informações oficiais e procedimentos formais, 
              consulte sempre os canais oficiais: <a href="https://www.gov.br" target="_blank" rel="noopener noreferrer" className="text-primary underline">gov.br</a>, 
              INSS (135), Caixa (111) ou visite uma agência.
            </AlertDescription>
          </Alert>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao acessar e usar o site Socio-Guide (auxiliosbr.com.br), você concorda em cumprir e estar vinculado a estes 
              Termos de Uso. Se você não concorda com qualquer parte destes termos, não deve usar nosso site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Natureza do Serviço</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Site Informativo e Educacional</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O Socio-Guide é um site de conteúdo informativo e educacional sobre benefícios sociais brasileiros. 
              Fornecemos:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Artigos informativos sobre programas sociais governamentais</li>
              <li>Simuladores e calculadoras para <strong>estimativas não oficiais</strong></li>
              <li>Guias práticos baseados em legislação pública</li>
              <li>Calendários de pagamentos (baseados em divulgações oficiais)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Não Somos Órgão Oficial</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>ESTE SITE NÃO É OFICIAL E NÃO POSSUI VÍNCULO COM:</strong>
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Governo Federal (Gov.br)</li>
              <li>Instituto Nacional do Seguro Social (INSS)</li>
              <li>Ministério do Desenvolvimento e Assistência Social (MDS)</li>
              <li>Caixa Econômica Federal</li>
              <li>Banco do Brasil</li>
              <li>Qualquer outro órgão público ou entidade governamental</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Isenção de Responsabilidade sobre Simuladores</h2>
            <Alert className="mb-6 border-orange-500 bg-orange-50 dark:bg-orange-950">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                <strong>ATENÇÃO:</strong> Os simuladores e calculadoras disponíveis neste site fornecem <strong>APENAS ESTIMATIVAS</strong>. 
                Os valores calculados podem diferir dos valores reais devido a:
              </AlertDescription>
            </Alert>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Mudanças na legislação não atualizadas em tempo real</li>
              <li>Variáveis individuais não consideradas no simulador</li>
              <li>Diferenças nos critérios de elegibilidade aplicados pelos órgãos oficiais</li>
              <li>Arredondamentos e simplificações nos cálculos</li>
              <li>Informações incorretas ou incompletas fornecidas pelo usuário</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed font-semibold">
              Para valores e procedimentos oficiais, consulte sempre o INSS (135), Caixa (111), site gov.br ou compareça 
              pessoalmente a uma agência.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Na extensão máxima permitida pela lei aplicável, o Socio-Guide e seus administradores, colaboradores e autores 
              <strong> NÃO SERÃO RESPONSÁVEIS POR:</strong>
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Decisões tomadas com base nas informações ou simuladores do site</li>
              <li>Erros ou imprecisões no conteúdo, mesmo que não intencionais</li>
              <li>Alterações nas regras de benefícios não refletidas imediatamente no site</li>
              <li>Indeferimentos de benefícios ou divergências entre estimativas e valores reais</li>
              <li>Danos diretos, indiretos, incidentais ou consequenciais resultantes do uso do site</li>
              <li>Perda de tempo, oportunidades ou benefícios relacionados ao uso das informações</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Propriedade Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Todo o conteúdo do Socio-Guide (textos, imagens, logotipos, design, código-fonte) é protegido por direitos autorais 
              e outras leis de propriedade intelectual. É proibido:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Copiar, reproduzir ou distribuir conteúdo sem autorização expressa</li>
              <li>Usar conteúdo para fins comerciais sem permissão</li>
              <li>Modificar, adaptar ou criar obras derivadas sem consentimento</li>
              <li>Fazer engenharia reversa de código ou funcionalidades</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Para solicitações de uso de conteúdo, entre em contato através de <strong>contato@auxiliosbr.com.br</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Conduta do Usuário</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ao usar nosso site, você concorda em:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Fornecer informações verdadeiras nos simuladores</li>
              <li>Não usar o site para atividades ilegais ou fraudulentas</li>
              <li>Não tentar acessar áreas restritas do site sem autorização</li>
              <li>Não transmitir vírus, malware ou código malicioso</li>
              <li>Não fazer scraping automatizado de conteúdo sem permissão</li>
              <li>Não se passar por outra pessoa ou organização</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Links para Sites Externos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nosso site contém links para sites oficiais (gov.br, INSS, MDS) e outros recursos externos para sua conveniência. 
              Não temos controle sobre esses sites e não somos responsáveis por seu conteúdo, políticas ou práticas. Recomendamos 
              ler os termos de uso de cada site visitado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Publicidade (Google AdSense)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este site utiliza Google AdSense para exibir anúncios que ajudam a manter o site gratuito. Você reconhece que:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Anúncios são de responsabilidade dos anunciantes e do Google</li>
              <li>Não endossamos produtos ou serviços anunciados</li>
              <li>Não somos responsáveis por transações realizadas através de anúncios</li>
              <li>Cookies de publicidade podem ser usados (veja nossa Política de Privacidade)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Precisão das Informações</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fazemos o possível para manter as informações atualizadas, mas:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Leis e regras de benefícios podem mudar sem aviso prévio</li>
              <li>Pode haver atraso entre mudanças oficiais e atualizações no site</li>
              <li>Informações são fornecidas "como estão" sem garantias de qualquer tipo</li>
              <li>Sempre verifique informações críticas em fontes oficiais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Disponibilidade do Site</h2>
            <p className="text-muted-foreground leading-relaxed">
              Não garantimos que o site estará disponível de forma ininterrupta ou livre de erros. Podemos suspender, modificar 
              ou descontinuar qualquer parte do site a qualquer momento sem aviso prévio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Privacidade e Proteção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              O tratamento de seus dados pessoais é regido por nossa{" "}
              <Link to="/politica-de-privacidade" className="text-primary hover:underline font-semibold">
                Política de Privacidade
              </Link>, que faz parte integrante destes Termos de Uso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Modificações dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações entram em vigor 
              imediatamente após publicação no site. O uso contínuo do site após mudanças constitui aceitação dos novos termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Lei Aplicável e Jurisdição</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas serão 
              resolvidas nos tribunais brasileiros competentes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Severabilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Se qualquer disposição destes termos for considerada inválida ou inexequível, as demais disposições 
              permanecerão em pleno vigor e efeito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">15. Recursos Oficiais</h2>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4 font-semibold">
                Para procedimentos oficiais, utilize sempre os canais oficiais:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Gov.br:</strong> <a href="https://www.gov.br" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.gov.br</a></li>
                <li><strong>INSS:</strong> Central 135 ou <a href="https://meu.inss.gov.br" target="_blank" rel="noopener noreferrer" className="text-primary underline">meu.inss.gov.br</a></li>
                <li><strong>Caixa Econômica:</strong> Central 111 ou <a href="https://www.caixa.gov.br" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.caixa.gov.br</a></li>
                <li><strong>Ministério do Desenvolvimento Social:</strong> <a href="https://www.gov.br/cidadania" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.gov.br/cidadania</a></li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">16. Contato</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para dúvidas sobre estes Termos de Uso:
            </p>
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-muted-foreground mb-2">
                <strong>E-mail:</strong> contato@auxiliosbr.com.br
              </p>
              <p className="text-muted-foreground">
                <strong>Formulário:</strong>{" "}
                <Link to="/contato" className="text-primary hover:underline">
                  auxiliosbr.com.br/contato
                </Link>
              </p>
            </div>
          </section>

          <div className="border-t pt-8 mt-12">
            <Alert className="border-blue-500 bg-blue-50 dark:bg-blue-950">
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                <strong>LEMBRE-SE:</strong> Somos um site informativo independente. Para benefícios oficiais, solicitações 
                formais, procedimentos administrativos ou valores definitivos, consulte <strong>SEMPRE</strong> os canais 
                oficiais do Governo Federal, INSS, Caixa ou MDS. Nossos simuladores são estimativas educacionais.
              </AlertDescription>
            </Alert>
          </div>
        </article>
      </main>
    </>
  );
};

export default TermosUso;